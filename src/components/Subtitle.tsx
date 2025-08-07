const Subtitle = ({ text = "wonderful" }: { text?: string }) => {
  return <h2 className="py-4 text-2xl">Our world is full of {text} flags.</h2>;
};

export default Subtitle;
