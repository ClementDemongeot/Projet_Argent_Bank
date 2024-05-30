import "./profileUser.css";
import User from "../../components/user/user";

function ProfileUser() {
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
