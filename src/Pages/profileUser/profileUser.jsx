import "./profileUser.css";
import User from "../../components/user/user";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userProfile } from "../../redux/actions/user.actions";
import AccountData from "../../components/accountData/AccountData";
import AccountDataCard from "./../../Data/AccountDataCard.json";

function ProfileUser() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      const userData = async () => {
        try {
          const responseProfile = await fetch(
            "http://localhost:3001/api/v1/user/profile",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (responseProfile.ok) {
            const data = await responseProfile.json();

            const userData = {
              createdAt: data.body.createdAt,
              updatedAt: data.body.updatedAt,
              id: data.body.id,
              email: data.body.email,
              firstname: data.body.firstName,
              lastname: data.body.lastName,
              username: data.body.userName,
            };
            /* Renvoi les données utilisateur dans l'état Redux */
            dispatch(userProfile(userData));
          } else {
            console.log("error while retrieving profile");
          }
        } catch (error) {
          console.error(error);
        }
      };
      userData();
    }
  }, [dispatch, token]);

  return (
    <main className="profile-user-container">
      <User />
      {AccountDataCard.map((data) => (
        <AccountData
          key={data.id}
          title={data.title}
          amount={data.amount}
          description={data.description}
        />
      ))}
    </main>
  );
}

export default ProfileUser;
