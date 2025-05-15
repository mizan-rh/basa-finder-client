import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

interface ListingCardProps {
  listing: {
    id: string;
    location: string;
    rentAmount: number;
    bedrooms: number;
    amenities: string[];
    description: string;
    images: string[];
  };
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <Link href={`/listings/${listing.id}`} passHref>
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col h-[520px] overflow-hidden">
        {/* Image */}
        <div className="relative w-full h-56">
          <Image
            src={
              listing.images[0]?.replace("http://", "https://") ||
              "/placeholder.jpg"
            }
            alt="Listing Image"
            fill
            className="object-cover rounded-t-xl"
          />
          <div className="absolute left-4 top-4 z-20">
            <Heart className="text-[#F79B72] w-5 h-5" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between flex-1 p-4">
          {/* Description */}
          <div className="text-base text-[16px] font-semibold capitalize line-clamp-2 min-h-[48px]">
            {listing.description}
          </div>

          {/* Price & Bedrooms */}
          <div className="flex justify-between items-center mt-2">
            <span className="text-xl font-bold text-[#F79B72]">
              ৳{listing.rentAmount}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {listing.bedrooms} Bedrooms
            </span>
          </div>

          {/* Amenities */}
          <div className="flex gap-2 justify-start items-center flex-wrap mt-3 min-h-[32px]">
            {listing.amenities.map((amenity, idx) => (
              <span
                key={idx}
                className="bg-gray-200 text-xs px-3 py-1 rounded-lg"
              >
                {amenity}
              </span>
            ))}
          </div>

          {/* Location */}
          <div className="flex items-center text-[10px] text-gray-600 mt-2">
            <FaLocationDot className="text-[#F79B72] mr-1" />
            <span className="capitalize">{listing.location}, Bangladesh</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
