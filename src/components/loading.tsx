import Image from "next/image";

const Loading = () => {
  return (
    <div className="p-5 py-3 flex flex-col justify-center items-center gap-y-2 border rounded-xl bg-muted">
      <div className="relative w-6 h-6 animate-spin">
        <Image fill alt="Loading" src={"/logo.png"} />
      </div>
      <p className="text-sm text-muted-foreground">Genius is thinking</p>
    </div>
  );
};

export default Loading;
