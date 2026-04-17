import Banner from "../components/Banner";
import DataShow from "../components/DataShow";
import FriendCard from "../components/FriendCard";
// import { friendsData } from "../data/friends";
import { useApp } from "../context/AppContext";
import Loading from "../components/Loading";

// ---- Home ----
const SmallHeading =() => (
  <div>
    <h1 className="font-bold text-xl py-5">Your Friends</h1>
  </div>
)


const Home = () => {
const { friends, loading } = useApp();

  if (loading) return <Loading />;

  return (
    <div className="p-10">
      <Banner />
      <DataShow />
           <SmallHeading/>


      <div className="grid md:grid-cols-4 gap-6">
        {friends.map(f => (
          <FriendCard key={f.id} f={f} />
        ))}
      </div>
    </div>
  );
};

export default Home;