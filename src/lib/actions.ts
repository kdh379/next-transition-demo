"use server";

export async function getPost(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getSlowPost(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  await new Promise((resolve) => setTimeout(resolve, 4000));

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}