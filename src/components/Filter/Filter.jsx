import { useEffect, useState } from "react";
import filterIcon from "../../assets/mobile/icon-filter.svg";
import { ReactComponent as SearchIcon } from "../../assets/mobile/searchIcon.svg";
import { ThemeContext } from "../../context/context";
import { useContext } from "react";
import Modal from "../Modal/Modal";
import LocationSearch from "../LocationSearch/LocationSearch";
import { ReactComponent as PinIcon } from "../../assets/desktop/icon-location.svg";

export default function Filter() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { jobs, setJobList, jobList } = useContext(ThemeContext);

  //Filters by title includiing contract type
  const handleTitleSearch = () => {
    const filteredJobs = jobs.filter((job) => {
      const company = job.company.toLowerCase();
      const position = job.position.toLowerCase();
      const byTitle = search.toLowerCase();
      const isFullTime = job.contract === "Full Time";

      const titleMatch =
        company.includes(byTitle) || position.includes(byTitle);
      const contractMatch = !isChecked || isFullTime;

      return titleMatch && contractMatch;
    });
    setJobList(filteredJobs);
  };

  // filters by location includiing contract type
  const handleLocationSearch = () => {
    const byLocation = location.toLowerCase();
    const filteredJobLocations = jobs.filter((job) => {
      const jobLocation = job.location.toLowerCase();
      const isFullTime = job.contract === "Full Time";

      const locationMatch = jobLocation.includes(byLocation);
      const contractMatch = !isChecked || isFullTime;

      return locationMatch && contractMatch;
    });
    setJobList(filteredJobLocations);
  };

  //Filters both location and title includiing contract type
  const handleSearch = () => {
    if (!search && !location && !isChecked) {
      console.log("No title, location, or full-time contract found");
      setJobList(jobs);
    } else {
      const byTitle = search.toLowerCase();
      const byLocation = location.toLowerCase();

      const filteredJobs = jobs.filter((job) => {
        const company = job.company.toLowerCase();
        const position = job.position.toLowerCase();
        const jobLocation = job.location.toLowerCase();

        const titleMatch =
          !search || company.includes(byTitle) || position.includes(byTitle);
        const locationMatch = !location || jobLocation.includes(byLocation);
        const contractMatch = !isChecked || job.contract === "Full Time";

        return titleMatch && locationMatch && contractMatch;
      });

      setJobList(filteredJobs);
    }
  };

  return (
    <form action="" className="filter">
      <div className="filter-by-title">
        <SearchIcon className="searchIcon" fill="red" />
        <input
          name="search"
          type="search"
          placeholder="Filter by title…"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="filter-by-location">
        <PinIcon className="pinIcon" />
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
      <div className="filter-by-contract">
        <div className="checkbox-group">
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
        </div>
        <div className="button-group">
          <button
            className="show-extra-filters"
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
          >
            <img src={filterIcon} alt="filter" width={"20px"} height={"20px"} />
          </button>
          <button
            className="search-button"
            onClick={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <SearchIcon className="button-Icon" />
            <span className="buttonText">Search</span>
          </button>
        </div>
      </div>

      {showModal && (
        <Modal>
          <LocationSearch setShowModal={setShowModal} />
        </Modal>
      )}
    </form>
  );
}
