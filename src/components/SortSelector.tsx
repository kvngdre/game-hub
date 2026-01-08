import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface SortSelectorProps {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-popularity", label: "Popularity" },
  { value: "-rating", label: "Average rating" }
];

const SortSelector = ({ onSelectSortOrder, sortOrder }: SortSelectorProps) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {sortOrders.find((order) => order.value === sortOrder)?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order, idx) => (
          <MenuItem key={idx} onClick={() => onSelectSortOrder(order.value)}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
