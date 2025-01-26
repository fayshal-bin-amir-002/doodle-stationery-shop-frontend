const NotFoundItem = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-[250px] flex justify-center items-center">
      <h1 className="text-2xl md:text-3xl">{title}</h1>
    </div>
  );
};

export default NotFoundItem;
