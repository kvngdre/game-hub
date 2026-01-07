import { HStack, Icon } from "@chakra-ui/react";
import { FaWindows, FaPlaystation, FaXbox, FaLinux, FaApple, FaAndroid } from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";
import type { Platform } from "../hooks/useGames";

interface PlatformIconListProps {
  platforms: Platform[];
}

const iconMap = new Map<string, IconType>([
  ["pc", FaWindows],
  ["playstation", FaPlaystation],
  ["xbox", FaXbox],
  ["linux", FaLinux],
  ["mac", FaApple],
  ["ios", MdPhoneIphone],
  ["android", FaAndroid],
  ["nintendo", SiNintendo],
  ["web", BsGlobe]
]);

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap.get(platform.slug)} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
