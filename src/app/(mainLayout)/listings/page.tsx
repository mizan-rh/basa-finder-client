"use client";

import { Button } from "@/components/ui/button";
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

type ListingWithId = TRentalListing & { _id: string };

interface RentalListingsProps {
  initialListings: ListingWithId[];
}

const LIMIT = 6;

const RentalListings: React.FC<RentalListingsProps> = ({ initialListings }) => {
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [bedrooms, setBedrooms] = useState("any");
  const [filteredListings, setFilteredListings] =
    useState<ListingWithId[]>(initialListings);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredListings.length / LIMIT);
  const paginatedListings = filteredListings.slice(
    (currentPage - 1) * LIMIT,
    currentPage * LIMIT
  );

  useEffect(() => {
    setFilteredListings(initialListings);
  }, [initialListings]);

  const handleSearch = () => {
    const filtered = initialListings.filter((listing: ListingWithId) => {
      const locationMatch =
        location === "" ||
        listing.location.toLowerCase().includes(location.toLowerCase());
      const priceMatch =
        listing.rentAmount >= priceRange[0] &&
        listing.rentAmount <= priceRange[1];
      const bedroomsMatch =
        bedrooms === "any" ||
        (bedrooms === "5"
          ? listing.bedrooms >= 5
          : listing.bedrooms.toString() === bedrooms);
      return locationMatch && priceMatch && bedroomsMatch;
    });

    setFilteredListings(filtered);
    setCurrentPage(1); // reset to page 1 after filter
  };

  const handleReset = () => {
    setLocation("");
    setPriceRange([0, 50000]);
    setBedrooms("any");
    setFilteredListings(initialListings);
    setCurrentPage(1);
  };

  return (
    <NMContainer className="my-10 px-4 lg:px-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Sidebar - Filters */}
        <div className="w-full lg:w-1/4 bg-white p-6 rounded-xl shadow-md h-fit">
          <h3 className="text-2xl font-semibold mb-6 text-[#2A4759]">
            Filter Listings
          </h3>

          <div className="space-y-6">
            {/* Location */}
            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <Input
                placeholder="Enter location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Price Range
              </label>
              <Slider
                defaultValue={[0, 50000]}
                min={0}
                max={50000}
                step={1000}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value)}
              />
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>৳{priceRange[0].toLocaleString()}</span>
                <span>৳{priceRange[1].toLocaleString()}</span>
              </div>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block text-sm font-medium mb-1">Bedrooms</label>
              <Select
                value={bedrooms}
                onValueChange={(value) => setBedrooms(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1">1 Bedroom</SelectItem>
                  <SelectItem value="2">2 Bedrooms</SelectItem>
                  <SelectItem value="3">3 Bedrooms</SelectItem>
                  <SelectItem value="4">4 Bedrooms</SelectItem>
                  <SelectItem value="5">5+ Bedrooms</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-3">
              <Button
                onClick={handleSearch}
                className="bg-[#F79B72] text-white hover:bg-black w-full"
              >
                Search
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                className="border-[#F79B72] text-[#F79B72] w-full"
              >
                Reset
              </Button>
            </div>
          </div>
        </div>

        {/* Right Content - Listings */}
        <div className="w-full lg:w-3/4">
          {paginatedListings.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {paginatedListings.map((listing, idx) => (
                  <ListingCard
                    key={idx}
                    listing={{
                      id: listing._id,
                      location: listing.location,
                      rentAmount: listing.rentAmount,
                      bedrooms: listing.bedrooms,
                      amenities: listing.amenities.slice(0, 2),
                      description: listing.description,
                      images: listing.images,
                    }}
                  />
                ))}
              </div>

              {/* Pagination Controls */}
              {/* Pagination Controls */}
              <div className="flex justify-center mt-6 gap-2">
                <Button
                  variant="outline"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="border-[#F79B72] text-[#F79B72] hover:bg-[#F79B72] hover:text-white disabled:opacity-50"
                >
                  Previous
                </Button>

                {[...Array(totalPages)].map((_, i) => (
                  <Button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`${
                      currentPage === i + 1
                        ? "bg-[#F79B72] text-white"
                        : "border-[#F79B72] text-[#F79B72] hover:bg-[#F79B72] hover:text-white"
                    }`}
                    variant="outline"
                  >
                    {i + 1}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="border-[#F79B72] text-[#F79B72] hover:bg-[#F79B72] hover:text-white disabled:opacity-50"
                >
                  Next
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-10">
              <p className="text-lg text-gray-500">
                No listings match your search criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </NMContainer>
  );
};

export default function RentalListingsPage() {
  const [initialListings, setInitialListings] = useState<ListingWithId[]>([]);

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

  return <RentalListings initialListings={initialListings} />;
}
