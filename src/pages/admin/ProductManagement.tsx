import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  useAddProductMutation,
  useDeleteProductMutation,
  useGetAllProductsQuery,
  useGetAProductQuery,
  useUpdateProductMutation,
} from "@/redux/features/product/productApi";
import { SquarePlus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import DoodleForm from "@/components/form/DoodleForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import DoodleInput from "@/components/form/DoodleInput";
import DoodleSelect from "@/components/form/DoodleSelect";
import { toast } from "sonner";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";

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

const ProductManagement = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data } = useGetAllProductsQuery({ page, search });
  const [deleteProduct] = useDeleteProductMutation();
  const products = data?.data?.data || [];
  const meta = data?.data?.meta || {};

  const pageNumbers = Array.from(
    { length: meta?.totalPage },
    (_, index) => index
  );
  const handleDeleteProduct = async (id: string) => {
    try {
      await deleteProduct(id);
      toast.success("Product deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete product!");
    }
  };
  const handleSearch: SubmitHandler<FieldValues> = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    setPage(1);
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between my-4">
        <div>
          <form onSubmit={handleSearch}>
            <div className="flex items-center gap-2 px-1">
              <Input
                name="search"
                placeholder="Search your product"
                type="search"
              />
              <Button size="sm" type="submit">
                Search
              </Button>
            </div>
          </form>
        </div>
        <ProductAddModal />
      </div>
      <Card className="p-4 w-full">
        <Table>
          <TableHeader>
            <TableRow className="">
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>InStock</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products &&
              products.map((product: any, i: number) => (
                <TableRow key={i} className="">
                  <TableCell>{product?.name}</TableCell>
                  <TableCell>{product?.category}</TableCell>
                  <TableCell>{product?.price}$</TableCell>
                  <TableCell>{product?.quantity}</TableCell>
                  <TableCell
                    className={`${
                      product?.inStock ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {product?.inStock ? "Available" : "Not Available"}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1.5 items-center flex-col lg:flex-row">
                      <ProductDetailsModal id={product?._id} />
                      <ProductUpdateModal id={product?._id} />
                      <Button
                        onClick={() => handleDeleteProduct(product?._id)}
                        size="sm"
                        className="bg-red-500"
                      >
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>
      <div className="my-5 flex justify-center items-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className="cursor-pointer"
                onClick={() => {
                  if (page > 1) {
                    setPage(page - 1);
                  }
                }}
              />
            </PaginationItem>
            {pageNumbers &&
              pageNumbers.map((i) => (
                <PaginationItem className="cursor-pointer" key={i}>
                  <PaginationLink
                    onClick={() => setPage(i + 1)}
                    isActive={page === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
            <PaginationItem>
              <PaginationNext
                className="cursor-pointer"
                onClick={() => {
                  if (page < pageNumbers?.length) {
                    setPage(page + 1);
                  }
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

const ProductDetailsModal = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState<any>(null);

  const { data, isLoading } = useGetAProductQuery(id, {
    skip: !open,
  });

  useEffect(() => {
    if (data && !isLoading) {
      setProduct(data?.data);
    }
  }, [data, isLoading]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="bg-amber-500">
          Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Product Details</DialogTitle>
          <DialogDescription>
            View detailed information about this product.
          </DialogDescription>
        </DialogHeader>
        {!isLoading && product ? (
          <div className="space-y-2">
            <img src={product?.image_url} alt="image" />
            <p>
              <strong>Name:</strong> {product.name}
            </p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Description:</strong> {product.description}
            </p>
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
            <p>
              <strong>Quantity:</strong> {product.quantity}
            </p>
            <p>
              <strong>In Stock:</strong>{" "}
              {product.inStock ? "Available" : "Not Available"}
            </p>
            <p>
              <strong>Created:</strong>{" "}
              {new Date(product.createdAt).toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>No product details available.</p>
        )}
        <DialogFooter>
          <Button type="button" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const ProductUpdateModal = ({ id }: { id: string }) => {
  const [updateProduct] = useUpdateProductMutation();
  const [open, setOpen] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = async (updatedData) => {
    const data: { price?: number; quantity?: number } = {};
    if (updatedData.price) {
      data.price = Number(updatedData.price);
    }
    if (updatedData.quantity) {
      data.quantity = Number(updatedData.quantity);
    }
    try {
      await updateProduct({ id, data });
      toast.success("Product updated successfully");
      setOpen(false);
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="bg-green-500">
          Update
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Product Details</DialogTitle>
          <DialogDescription>
            View detailed information about this product.
          </DialogDescription>
        </DialogHeader>
        <DoodleForm onSubmit={onSubmit}>
          <DoodleInput name="price" label="Price" type="text" />
          <DoodleInput name="quantity" label="Quantity" type="text" />
          <Button type="submit">Update</Button>
        </DoodleForm>
      </DialogContent>
    </Dialog>
  );
};

const ProductAddModal = () => {
  const [addProduct] = useAddProductMutation();
  const [open, setOpen] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const transformedData = {
      ...data,
      price: Number(data.price),
      quantity: Number(data.quantity),
    };

    try {
      await addProduct(transformedData);
      toast.success("Product added successfully");
      setOpen(false);
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <SquarePlus color="white" /> Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <DoodleForm onSubmit={onSubmit}>
          <DoodleInput name="name" type="text" label="Name" />
          <DoodleInput name="brand" type="text" label="Brand" />
          <DoodleSelect name="category" options={categories} label="Category" />
          <DoodleInput name="price" type="text" label="Price" />
          <DoodleInput name="quantity" type="text" label="Quantity" />
          <DoodleInput name="description" type="text" label="Description" />
          <DoodleInput name="image_url" type="text" label="Image Link" />
          <Button type="submit">Add Product</Button>
        </DoodleForm>
      </DialogContent>
    </Dialog>
  );
};

export default ProductManagement;
