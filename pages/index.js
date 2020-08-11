import fetch from "isomorphic-unfetch";
import PageTitle from "../components/PageTitle";

const Index = ({ users }) => (
  <>
    <PageTitle>Hi friend,</PageTitle>
    <p>
      Next.js PWA Boilerplate starts your progressive web app off with a perfect
      Google Lighthouse score.
    </p>
    <div>
      <h4>User list from https://jsonplaceholder.typicode.com</h4>
      <ul>
        {users.map(({ id, name, username, email }) => (
          <li key={id}>
            {name} * {username} * {email}
          </li>
        ))}
      </ul>
    </div>
  </>
);

Index.getInitialProps = async function () {
  const fetchPosts = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await fetchPosts.json();
  return {
    users,
  };
};

export default Index;
