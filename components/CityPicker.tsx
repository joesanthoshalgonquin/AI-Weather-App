import { useState } from "react";
import { Country, City } from "country-state-city";
import Select from "react-select";
import { useRouter } from "next/navigation";
import { GlobeIcon } from "@heroicons/react/solid";

type option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

const CityPicker = () => {
  const [selectedCountry, setSelectedCountry] = useState<option>(null);
  const [selectedCity, setSelectedCity] = useState<cityOption>(null);
  const router = useRouter();

  const handleSelectedCountry = (selectedCountry: option) => {
    setSelectedCountry(selectedCountry);
    setSelectedCity(null);
  };

  const handleSelectedCity = (selectedCity: cityOption) => {
    setSelectedCity(selectedCity);
    router.push(
      `/location/${selectedCity?.value.name}/${selectedCity?.value.latitude}/${selectedCity?.value.longitude}`
    );
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-white/80">
          <GlobeIcon className="h-5 w-5 text-white" />
          <label htmlFor="country">Country</label>
        </div>
        <Select
          className="text-black"
          value={selectedCountry}
          options={options}
          onChange={handleSelectedCountry}
        />
      </div>

      {selectedCountry && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-white/80">
            <GlobeIcon className="h-5 w-5 text-white" />
            <label htmlFor="country">City</label>
          </div>
          <Select
            className="text-black"
            value={selectedCity}
            options={City.getCitiesOfCountry(
              selectedCountry.value.isoCode
            )?.map((city) => ({
              value: {
                latitude: city.latitude!,
                longitude: city.longitude!,
                countryCode: city.countryCode,
                name: city.name,
                stateCode: city.stateCode,
              },
              label: city.name,
            }))}
            onChange={handleSelectedCity}
          />
        </div>
      )}
    </div>
  );
};

export default CityPicker;
