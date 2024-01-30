import { useContext } from "react";
import { useState } from "react";
import { ThemeContext } from "../../context/context";

export default function LocationSearch(props) {
  const { jobs, setJobList } = useContext(ThemeContext);
  const [location, setLocation] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleLocationSearch = () => {
    const locationText = location.toLowerCase();
    if (location === "") {
      setJobList(jobs);
    } else {
      //Filters job location
      const filteredLocations = jobs.filter((job) => {
        const jobLocation = job.location.toLowerCase();
        return isChecked
          ? jobLocation.includes(locationText) && job.contract === "Full Time"
          : jobLocation.includes(locationText);
      });
      setJobList(filteredLocations);
    }
  };

  return (
    <div className="location-contract modal-style">
      <div className="input-wrapper border-1">
        <div className="icon-wrapper">
          <img src="./assets/icons/pin.svg" alt="" />
        </div>
        <input
          type="search"
          name="location"
          placeholder="Filter by location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
      </div>
      <div className="input-wrapper column gap-3 border-none">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="contract"
            value={isChecked}
            onChange={(e) => {
              if (e.target.checked === true) {
                setIsChecked(true);
              } else {
                setIsChecked(false);
              }
            }}
          />
          <label htmlFor="">Full Time Only</label>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            handleLocationSearch();
            props.setShowModal(false);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}
