import "./profileUser.css";
import User from "../../components/user/user";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userProfile } from "../../redux/actions/user.actions";

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

      <section className="profile-user-account">
        <div className="profile-user-account-content">
          <h2 className="profile-user-account-name">
            Argent Bank Checking (x8349)
          </h2>
          <p className="profile-user-account-amount">$2,082.79</p>
          <p className="profile-user-account-description">Available Balance</p>
        </div>

        <div className="profile-user-account-transaction">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="profile-user-account">
        <div className="profile-user-account-content">
          <h2 className="profile-user-account-name">
            Argent Bank Savings (x6712)
          </h2>
          <p className="profile-user-account-amount">$10,928.42</p>
          <p className="profile-user-account-description">Available Balance</p>
        </div>

        <div className="profile-user-account-transaction">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="profile-user-account">
        <div className="profile-user-account-content">
          <h2 className="profile-user-account-name">
            Argent Bank Credit Card (x8349)
          </h2>
          <p className="profile-user-account-amount">$184.30</p>
          <p className="profile-user-account-description">Current Balance</p>
        </div>

        <div className="profile-user-account-transaction">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default ProfileUser;
