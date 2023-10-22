import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

type TeamData = {
  name: string;
  winrate: number;
  winfrac: string;
};

type TournamentData = {
  tournament_id: string;
  region: string;
  teams: Record<string, TeamData>;
};

type Tournaments = Record<string, TournamentData>;

export default function ComboBox({ dataset }: { dataset: Tournaments }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const tournamentsArray = Object.keys(dataset).map((key) => ({
    name: key,
    ...dataset[key],
  }));

  const uniqueRegions = Array.from(
    new Set(tournamentsArray.map((tournament) => tournament.region))
  );

  const filteredData = tournamentsArray.filter((tournament) => {
    const matchesQuery = tournament.name
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesRegion =
      !selectedRegion || tournament.region === selectedRegion;

    return matchesQuery && matchesRegion;
  });
  return (
    <div className="flex w-full sm:w-5/6 ">
      <Combobox value={selected} onChange={setSelected}>
        <div className="w-full relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-xl bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 text-xs sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-base leading-5 bg-white text-gray-900 focus:ring-0 md:text-lg"
              placeholder="Select a tournament..."
              displayValue={(data: any) => data}
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
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:text-sm px-2">
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
                      setSelectedRegion(region);}}
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
                filteredData.map((tournament) => (
                  <Combobox.Option
                    key={tournament.tournament_id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={tournament.name}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {tournament.name}
                        </span>
                        {selected ? (
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
        <button
          //style={{ backgroundColor: "#00C8C8" }}
          className="px-2 py-2 mx-3 font-bold text-white rounded bg-teal-500 hover:bg-teal-700 "
          type="submit"
        >
          Submit
        </button>
      </Combobox>
    </div>
  );
}
