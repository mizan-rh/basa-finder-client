"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NMContainer from "@/components/ui/core/NMContainer";
import { Skeleton } from "@/components/ui/skeleton";
import { useUser } from "@/context/UserContext";
import { getSingleUser } from "@/services/Users";
import { IUser } from "@/types";
import { useEffect, useState } from "react";

const LandlordHomePage = () => {
  const { user } = useUser();
  const [userData, setUserData] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user?.userId) return;
      try {
        const res = await getSingleUser(user.userId);
        if (res?.success) {
          setUserData(res.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [user?.userId]);

  if (!userData) {
    return (
      <NMContainer>
        <Skeleton className="h-60 w-full rounded-lg" />
        <Skeleton className="h-8 w-1/2 my-4" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-2/3" />
      </NMContainer>
    );
  }

  return (
    <NMContainer className="min-h-screen py-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 text-ray-950">
        Landlords Dashboard
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Section - 1/3 */}
        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-2xl p-6">
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-28 h-28 border-4 border-[#F79B72] mb-4">
              <AvatarImage
                src={
                  userData.profileImg ||
                  "https://i.postimg.cc/QxnWx7KH/user-placeholder.jpg"
                }
              />
              <AvatarFallback>{userData.name[0]}</AvatarFallback>
            </Avatar>

            <h2 className="text-xl font-semibold text-gray-800">
              {userData.name}
            </h2>
            <p className="text-sm text-gray-500">{userData.email}</p>
            <span className="mt-2 inline-block bg-blue-100 text-[#F79B72] text-xs px-3 py-1 rounded-full capitalize font-medium">
              {userData.role}
            </span>
          </div>

          <div className="mt-6 space-y-4 text-sm text-left text-gray-700">
            <InfoItem label="Phone Number" value={userData.phone_number} />
            <InfoItem label="Address" value={userData.address} />
            <InfoItem
              label="Account Status"
              value={userData.isBlocked ? "Blocked" : "Active"}
              color={userData.isBlocked ? "text-red-500" : "text-green-500"}
            />
          </div>
        </div>

        {/* Reserved Dashboard Content - 2/3 */}
        <div className="w-full md:w-2/3 bg-gray-50 rounded-2xl p-6 shadow-inner min-h-[300px] flex items-center justify-center text-gray-400 text-lg">
          {/* Placeholder: Replace this section with future content */}
          Dashboard content goes here (stats, actions, etc.)
        </div>
      </div>
    </NMContainer>
  );
};

const InfoItem = ({
  label,
  value,
  color = "text-gray-800",
}: {
  label: string;
  value?: string;
  color?: string;
}) => (
  <div>
    <p className="text-xs text-gray-500 mb-1">{label}:</p>
    <p className={`font-medium ${color}`}>{value || "N/A"}</p>
  </div>
);

export default LandlordHomePage;
