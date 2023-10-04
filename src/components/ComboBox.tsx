import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const teams = [
  { id: 1, name: "2023 Worlds" },
  { id: 2, name: "2023 MSI" },
  { id: 3, name: "2022 Worlds" },
  { id: 4, name: "2022 MSI" },
  { id: 5, name: "2021 Worlds" },
  { id: 6, name: "2021 MSI" },
  { id: 7, name: "2023 EMEA Championship" },
];

export default function ComboBox() {
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");

  const filteredTeam =
    query === ""
      ? teams
      : teams.filter((team) =>
          team.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="w-72 sm:w-5/6 ">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 text-xs sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-base leading-5 text-gray-900 focus:ring-0 md:text-lg"
              placeholder="Select a tournament..."
              displayValue={(team: any) => team.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              <button className="px-2 py-2 mx-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                Submit
              </button>
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
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:text-sm">
              {filteredTeam.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredTeam.map((team) => (
                  <Combobox.Option
                    key={team.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={team}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {team.name}
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
      </Combobox>
    </div>
  );
}
