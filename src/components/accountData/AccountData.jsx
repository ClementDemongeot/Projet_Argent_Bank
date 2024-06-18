import "./AccountData.css";

function AccountData({ title, amount, description }) {
  return (
    <section className="profile-user-account">
      <div className="profile-user-account-content">
        <h2 className="profile-user-account-name">{title}</h2>
        <p className="profile-user-account-amount">{amount}</p>
        <p className="profile-user-account-description">{description}</p>
      </div>

      <div className="profile-user-account-transaction">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

export default AccountData;
