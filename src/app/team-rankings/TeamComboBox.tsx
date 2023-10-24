import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { TeamType } from "@/types/teams";

type ComboBoxProps = {
  dataset: TeamType[];
  onTeamSelected: React.Dispatch<React.SetStateAction<TeamType[]>>;
};

export default function ComboBox({ dataset, onTeamSelected }: ComboBoxProps) {
  const [selectedTeams, setSelectedTeams] = useState<TeamType[]>([]); // Renamed for clarity
  const [query, setQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const [allTeams, setAllTeams] = useState<TeamType[]>(dataset);

  const handleSelection = (
    e: React.MouseEvent,
    selectedTeam: (typeof dataset)[0]
  ) => {
    e.preventDefault();
    e.stopPropagation();

    // If the team is already selected, remove it from the list
    if (selectedTeams.some((team) => team.id === selectedTeam.id)) {
      const updatedTeams = selectedTeams.filter(
        (team) => team.id !== selectedTeam.id
      );
      setSelectedTeams(updatedTeams);
      onTeamSelected(updatedTeams);
      return;
    }
    // Get original winrates
    const allTeamsWithOriginalWinrates = [selectedTeam, ...selectedTeams].map(
      (team) => ({
        ...team,
        originalWinrate: dataset.find((t) => t.id === team.id)?.winrate,
      })
    );

    // Sort all teams by their original winrates in descending order
    const sortedTeams = allTeamsWithOriginalWinrates.sort((a, b) => {
      return (b.originalWinrate || 0) - (a.originalWinrate || 0);
    });

    // Assign rankings based on the sorted order
    const rerankedTeams = sortedTeams.map((team, index) => ({
      ...team,
      ranking: index + 1, // Set rank starting from 1 for the highest winrate
    }));

    setSelectedTeams(rerankedTeams);
    onTeamSelected(rerankedTeams);
  };

  const clearSelection = () => {
    setSelectedTeams([]);
    onTeamSelected([]);
  };

  const teams = allTeams;

  const regions = teams.map((team) => team.region);
  const validRegions = regions.filter((region): region is string =>
    Boolean(region)
  );
  const uniqueRegions: string[] = Array.from(new Set(validRegions));

  const filteredData = teams.filter((team) => {
    const matchesQuery = team.name.toLowerCase().includes(query.toLowerCase());
    const matchesRegion = !selectedRegion || team.region === selectedRegion;

    return matchesQuery && matchesRegion;
  });

  return (
    <div className="flex w-full sm:w-5/6 ">
      <Combobox>
        <div className="w-full relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-xl bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 text-xs sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-base leading-5 bg-white text-gray-900 focus:ring-0 md:text-lg"
              placeholder="Select a team..."
              value={selectedTeams.map((team) => team.name).join(", ")}
              onChange={(event) => setQuery(event.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              <Combobox.Button>
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:text-sm px-2 z-10">
              <div className="flex flex-wrap">
                {uniqueRegions.map((region) => (
                  <button
                    type="button"
                    key={region}
                    className={`m-1 px-2 py-1 rounded ${
                      selectedRegion === region
                        ? "bg-teal-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedRegion(region);
                    }}
                  >
                    {region}
                  </button>
                ))}
                <button
                  type="button"
                  className={`m-1 px-2 py-1 rounded ${
                    !selectedRegion
                      ? "bg-teal-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedRegion("");
                  }}
                >
                  All
                </button>
              </div>
              {filteredData.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredData.map((team) => (
                  <Combobox.Option
                    key={team.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={team.name}
                    onClick={(e) => handleSelection(e, team)}
                  >
                    {({ active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selectedTeams.find((t) => t.id === team.id)
                              ? "font-medium"
                              : "font-normal"
                          }`}
                        >
                          {team.name}
                        </span>
                        {selectedTeams.find((t) => t.id === team.id) ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      <button
        className="px-2 py-2 mx-3 font-bold text-white rounded bg-teal-500 hover:bg-teal-700 "
        onClick={clearSelection}
      >
        Clear Selection
      </button>
    </div>
  );
}