import ListingCard from "./ListingCard";

function ListingsContainer({ listings, updateListing }) {
  return (
    <ul className="cards">
      {listings.map((listing) => (
        <ListingCard
          key={listing.id}
          {...listing}
          updateListing={updateListing}
        />
      ))}
    </ul>
  );
}

export default ListingsContainer;