"use client";

import ListingCard from "@/components/ui/core/ListingCard";
import NMContainer from "@/components/ui/core/NMContainer";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { getAllListings } from "@/services/Listings";
import { TRentalListing } from "@/types/listings";
import React, { useEffect, useState } from "react";
// import Link from "next/link";

type ListingWithId = TRentalListing & { _id: string };

interface FilteringProps {
  initialListings: ListingWithId[];
}

const Filtering: React.FC<FilteringProps> = ({ initialListings }) => {
  // State for search filters
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [bedrooms, setBedrooms] = useState("any");
  const [filteredListings, setFilteredListings] =
    useState<ListingWithId[]>(initialListings);

  // Update filtered listings when initial listings change
  useEffect(() => {
    setFilteredListings(initialListings);
  }, [initialListings]);

  // Handle search filter changes
  const handleSearch = () => {
    const filtered = initialListings.filter((listing: ListingWithId) => {
      // Filter by location (case insensitive)
      const locationMatch =
        location === "" ||
        listing.location.toLowerCase().includes(location.toLowerCase());

      // Filter by price range
      const priceMatch =
        listing.rentAmount >= priceRange[0] &&
        listing.rentAmount <= priceRange[1];

      // Filter by bedrooms
      const bedroomsMatch =
        bedrooms === "any" || listing.bedrooms.toString() === bedrooms;

      return locationMatch && priceMatch && bedroomsMatch;
    });

    setFilteredListings(filtered);
  };

  // Reset all filters
  const [open, setOpen] = useState(false);
  return (
    <NMContainer className=" p-0">
      {/* Search Section */}
      <div className="lg:p-6 p-3 bg-white/70">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 gap-2">
          <div className="bg-white rounded-md">
            <Input
              placeholder="Enter location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full h-full"
            />
          </div>

          <div className="bg-white rounded-md">
            <div className="p-4 flex gap-4 justify-center items-center">
              <span>৳{priceRange[0].toLocaleString()}</span>
              <Slider
                defaultValue={[0, 50000]}
                min={0}
                max={50000}
                step={1000}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value)}
                className=" bg-[#0AA5CD] rounded-3xl text-xs"
              />
              <span>৳{priceRange[1].toLocaleString()}</span>
            </div>
          </div>

          <div className="bg-white rounded-md">
            <Select
              value={bedrooms}
              onValueChange={(value) => setBedrooms(value)}
            >
              <SelectTrigger className="w-full h-full">
                <SelectValue placeholder="Bedromes" />
              </SelectTrigger>
              <SelectContent className="bg-gray-200">
                <SelectItem value="any">Bedrooms</SelectItem>
                <SelectItem value="1">1 Bedrooms</SelectItem>
                <SelectItem value="2">2 Bedrooms</SelectItem>
                <SelectItem value="3">3 Bedrooms</SelectItem>
                <SelectItem value="4">4 Bedrooms</SelectItem>
                <SelectItem value="5">5+ Bedrooms</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* <div className="flex md:flex-row flex-col items-end gap-2"> */}
          <div onClick={() => setOpen(true)} className="w-full ">
            <button
              onClick={handleSearch}
              className="bg-[#0AA5CD] w-full p-4 text-white rounded-md hover:bg-black flex-1 cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Listings Header */}
      {/* <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">All Listings</h2>
        <Link href="/listings">
          <Button variant="outline" className="rounded-full">
            View All
          </Button>
        </Link>
      </div> */}

      {/* Listings Grid */}
      <div className=" sticky z-30 bg-gray-100 rounded-2xl shadow-2xl">
        <div className=" ">
          {open ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 !lg:p-20 px-10 py-10 ">
              {filteredListings.length > 0 ? (
                filteredListings.map((listing: ListingWithId, idx: number) => (
                  <ListingCard
                    key={idx}
                    listing={{
                      id: listing._id,
                      location: listing.location,
                      rentAmount: listing.rentAmount,
                      bedrooms: listing.bedrooms,
                      amenities: listing.amenities,
                      description: listing.description,
                      images: listing.images,
                    }}
                  />
                ))
              ) : (
                <div className="col-span-4 text-center py-10">
                  <p className="text-lg text-gray-500">
                    No listings match your search criteria.
                  </p>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </NMContainer>
  );
};

// This exports the page component with data fetching
export default function FilteringPage() {
  const [initialListings, setInitialListings] = useState<ListingWithId[]>([]);

  // Use useEffect to fetch data on the client side
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getAllListings();
        setInitialListings(data || []);
      } catch (error) {
        console.error("Error fetching listings:", error);
        setInitialListings([]);
      }
    }

    fetchData();
  }, []);

  return <Filtering initialListings={initialListings} />;
}
