interface PostProps {
  title: string;
  body: string;
}

export default function Post({ title, body }: PostProps) {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="font-bold">{title}</h3>
      <p>{body}</p>
    </div>
  );
}