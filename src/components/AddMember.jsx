import "./AddMember.css";

const AddMember = () => {
  return (
    <div className="modal-overlay">
      <div className="add-member-modal">

        {/* Header */}
        <div className="modal-header">
          <div>
            <h2>Add New Member</h2>
            <p>Create a new member profile</p>
          </div>

          <button className="modal-close">×</button>
        </div>

        {/* Body */}
        <div className="modal-body">

          {/* Personal Information */}
          <section className="form-section">
            <div className="section-heading">
              <h3>Personal Information</h3>
              <p>Basic information about the member.</p>
            </div>

            <div className="form-grid">

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                />
              </div>

              <div className="form-group">
                <label>Date of Birth</label>
                <input type="date" />
              </div>

              <div className="form-group">
                <label>Gender</label>

                <select>
                  <option value="">Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

            </div>
          </section>


          {/* Membership */}
          <section className="form-section">

            <div className="section-heading">
              <h3>Membership</h3>
              <p>Configure the member's membership.</p>
            </div>

            <div className="form-grid">

              <div className="form-group">
                <label>Membership Plan</label>

                <select>
                  <option value="">
                    Select membership plan
                  </option>
                  <option>Monthly</option>
                  <option>Quarterly</option>
                  <option>Half Yearly</option>
                  <option>Yearly</option>
                </select>
              </div>

              <div className="form-group">
                <label>Start Date</label>
                <input type="date" />
              </div>

              <div className="form-group">
                <label>End Date</label>
                <input type="date" />
              </div>

              <div className="form-group">
                <label>Membership Amount</label>

                <input
                  type="number"
                  placeholder="Enter amount"
                />
              </div>

            </div>

          </section>


          {/* Emergency Contact */}
          <section className="form-section">

            <div className="section-heading">
              <h3>Emergency Contact</h3>
              <p>Contact information for emergencies.</p>
            </div>

            <div className="form-grid">

              <div className="form-group">
                <label>Contact Name</label>

                <input
                  type="text"
                  placeholder="Enter contact name"
                />
              </div>

              <div className="form-group">
                <label>Relationship</label>

                <input
                  type="text"
                  placeholder="e.g. Father"
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>

                <input
                  type="tel"
                  placeholder="Enter phone number"
                />
              </div>

            </div>

          </section>


          {/* Fitness */}
          <section className="form-section">

            <div className="section-heading">
              <h3>Fitness Details</h3>
              <p>Basic fitness information.</p>
            </div>

            <div className="form-grid">

              <div className="form-group">
                <label>Height (cm)</label>

                <input
                  type="number"
                  placeholder="Enter height"
                />
              </div>

              <div className="form-group">
                <label>Weight (kg)</label>

                <input
                  type="number"
                  placeholder="Enter weight"
                />
              </div>

              <div className="form-group">
                <label>Fitness Goal</label>

                <select>
                  <option value="">Select goal</option>
                  <option>Weight Loss</option>
                  <option>Muscle Gain</option>
                  <option>Strength</option>
                  <option>General Fitness</option>
                  <option>Endurance</option>
                </select>
              </div>

              <div className="form-group">
                <label>Trainer</label>

                <select>
                  <option value="">Assign trainer</option>
                  <option>Trainer 1</option>
                  <option>Trainer 2</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label>Medical Notes</label>

                <textarea
                  rows="3"
                  placeholder="Enter relevant medical information"
                />
              </div>

            </div>

          </section>

        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="secondary-btn">
            Cancel
          </button>

          <button className="primary-btn">
            Add Member
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddMember;