export default function Post({ posts }) {
    return (
      <div>
        <h1>Travel detail</h1>
        {posts.map((post) => {
          return (
            <div key={post.postID}>
              <p>{post.title}</p>
              <p>{post.price} baht</p>
            </div>
          );
        })}
      </div>
    );
  }
  
  // SSR, real-time
  export async function getServerSideProps({query}) {
    try {
      const res = await fetch(`${process.env.URL_ROOT}/api/post/${query.id}`);
      if(res.ok) {
        const posts = await res.json();
        return { props: {posts}};
      }
      throw Error('server response not ok');
    } catch (error) {
      console.error(error);
      return res.status(500).send('error');
    }
  }
  
  //SSG
  // export async function getStaticProps() {
  //   try {
  //     const res = await fetch("http://localhost:9000/post");
  //     if (res.ok) {
  //       const posts = await res.json();
  //       return { props: { posts }};
  //     }
  //     throw Error("server response not ok");
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).send("error");
  //   }
  // }
  //ISR (SSG+Update)
  // export async function getStaticProps() {
  //   try {
  //     const res = await fetch("http://localhost:9000/post");
  //     if (res.ok) {
  //       const posts = await res.json();
  //       return { props: { posts }, revalidate: 10 };
  //     }
  //     throw Error("server response not ok");
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).send("error");
  //   }
  // }
  