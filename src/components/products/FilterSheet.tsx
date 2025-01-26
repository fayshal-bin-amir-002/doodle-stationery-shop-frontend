import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Button } from "../ui/button";
import { Filter } from "lucide-react";
import { Label } from "../ui/label";
import { FieldValues, SubmitHandler } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useState } from "react";

const categories = [
  { label: "Writing", value: "Writing" },
  { label: "Office Supplies", value: "Office Supplies" },
  { label: "Art Supplies", value: "Art Supplies" },
  { label: "Educational", value: "Educational" },
  { label: "Technology", value: "Technology" },
  { label: "Cleaning Supplies", value: "Cleaning Supplies" },
  { label: "Furniture", value: "Furniture" },
  { label: "Packaging", value: "Packaging" },
];

const FilterSheet = ({
  setFilterData,
  filterData,
  setPage,
}: {
  setFilterData: any;
  filterData: any;
  setPage: any;
}) => {
  const [rangeValue, setRangeValue] = useState([filterData?.range]);
  const [categoryValue, setCategoryValue] = useState(filterData?.category);
  const [inStockValue, setInStockValue] = useState(filterData?.instock);

  const handleReset = () => {
    setFilterData({
      range: 0,
      category: "",
      instock: "",
    });

    setRangeValue([0]);
    setCategoryValue("");
    setInStockValue("");
  };

  const handleFilter: SubmitHandler<FieldValues> = (e) => {
    e.preventDefault();

    const stock =
      inStockValue === "not_available"
        ? false
        : inStockValue === "available"
        ? true
        : "";

    const data = {
      range: rangeValue[0],
      category: categoryValue,
      instock: stock,
    };

    setFilterData(data);
    setPage(1);
  };

  return (
    <div>
      <Sheet key="right">
        <SheetTrigger asChild>
          <Button variant="outline">
            {" "}
            <Filter color="#e11d48" />
            Filter Products
          </Button>
        </SheetTrigger>
        <SheetContent side={"right"}>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <form onSubmit={handleFilter} className="space-y-4">
            {/* here will be the navlinks */}
            <div className="space-y-2">
              <Label>Price Range</Label>
              <Slider
                name="range"
                value={rangeValue}
                onValueChange={(e) => setRangeValue(e)}
                min={0}
                max={50}
                step={1}
              />
              <div className="text-right">
                <small className="text-right">{rangeValue}$</small>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Select
                name="category"
                value={categoryValue}
                onValueChange={(e) => setCategoryValue(e)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {categories &&
                      categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>In Stock</Label>
              <RadioGroup
                name="instock"
                value={inStockValue}
                onValueChange={(e) => setInStockValue(e)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="r1" />
                  <Label htmlFor="r1">All</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="available" id="r2" />
                  <Label htmlFor="r2">Availabe</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="not_available" id="r3" />
                  <Label htmlFor="r3">Not Availabe</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="pt-5">
              <Button type="submit" className="w-full">
                Apply Filter
              </Button>
              <Button
                type="button"
                onClick={handleReset}
                className="w-full bg-cPrimary mt-3"
              >
                Reset Filter
              </Button>
            </div>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default FilterSheet;
