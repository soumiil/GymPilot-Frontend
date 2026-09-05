const AddMember = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">

      <div className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-card-bg shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-5">

          <div>
            <h2 className="text-xl font-semibold tracking-tight text-text-primary">
              Add New Member
            </h2>

            <p className="mt-1 text-sm text-text-muted">
              Create a new member profile
            </p>
          </div>

          <button
            type="button"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-lg
              text-xl leading-none
              text-text-muted
              transition
              hover:bg-bg-tertiary
              hover:text-text-primary
            "
          >
            ×
          </button>

        </div>


        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">

          {/* Personal Information */}
          <section className="border-b border-border pb-7">

            <div className="mb-5">
              <h3 className="text-sm font-semibold text-text-primary">
                Personal Information
              </h3>

              <p className="mt-1 text-xs text-text-muted">
                Basic information about the member.
              </p>
            </div>


            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <div className="space-y-2">
                <label className="block text-sm font-medium text-text-secondary">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter full name"
                  className="
                    h-11 w-full rounded-lg
                    border border-border
                    bg-bg-tertiary
                    px-3
                    text-sm text-text-primary
                    placeholder:text-text-muted
                    outline-none
                    transition-all duration-200
                    hover:border-border-hover
                    focus:border-primary
                    focus:ring-2 focus:ring-primary-soft
                  "
                />
              </div>


              <div className="space-y-2">
                <label className="block text-sm font-medium text-text-secondary">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="
                    h-11 w-full rounded-lg
                    border border-border
                    bg-bg-tertiary
                    px-3
                    text-sm text-text-primary
                    placeholder:text-text-muted
                    outline-none
                    transition-all duration-200
                    hover:border-border-hover
                    focus:border-primary
                    focus:ring-2 focus:ring-primary-soft
                  "
                />
              </div>


              <div className="space-y-2">
                <label className="block text-sm font-medium text-text-secondary">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter email address"
                  className="
                    h-11 w-full rounded-lg
                    border border-border
                    bg-bg-tertiary
                    px-3
                    text-sm text-text-primary
                    placeholder:text-text-muted
                    outline-none
                    transition-all duration-200
                    hover:border-border-hover
                    focus:border-primary
                    focus:ring-2 focus:ring-primary-soft
                  "
                />
              </div>


              <div className="space-y-2">
                <label className="block text-sm font-medium text-text-secondary">
                  Date of Birth
                </label>

                <input
                  type="date"
                  className="
                    h-11 w-full rounded-lg
                    border border-border
                    bg-bg-tertiary
                    px-3
                    text-sm text-text-primary
                    outline-none
                    transition-all duration-200
                    hover:border-border-hover
                    focus:border-primary
                    focus:ring-2 focus:ring-primary-soft
                  "
                />
              </div>


              <div className="space-y-2">
                <label className="block text-sm font-medium text-text-secondary">
                  Gender
                </label>

                <select
                  className="
                    h-11 w-full rounded-lg
                    border border-border
                    bg-bg-tertiary
                    px-3
                    text-sm text-text-primary
                    outline-none
                    transition-all duration-200
                    hover:border-border-hover
                    focus:border-primary
                    focus:ring-2 focus:ring-primary-soft
                  "
                >
                  <option value="">Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

            </div>

          </section>


          {/* Membership */}
          <section className="border-b border-border py-7">

            <div className="mb-5">
              <h3 className="text-sm font-semibold text-text-primary">
                Membership
              </h3>

              <p className="mt-1 text-xs text-text-muted">
                Configure the member's membership.
              </p>
            </div>


            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <div className="space-y-2">
                <label className="block text-sm font-medium text-text-secondary">
                  Membership Plan
                </label>

                <select
                  className="
                    h-11 w-full rounded-lg
                    border border-border
                    bg-bg-tertiary
                    px-3
                    text-sm text-text-primary
                    outline-none
                    transition-all duration-200
                    hover:border-border-hover
                    focus:border-primary
                    focus:ring-2 focus:ring-primary-soft
                  "
                >
                  <option value="">Select membership plan</option>
                  <option>Monthly</option>
                  <option>Quarterly</option>
                  <option>Half Yearly</option>
                  <option>Yearly</option>
                </select>
              </div>


              <div className="space-y-2">
                <label className="block text-sm font-medium text-text-secondary">
                  Start Date
                </label>

                <input
                  type="date"
                  className="
                    h-11 w-full rounded-lg
                    border border-border
                    bg-bg-tertiary
                    px-3
                    text-sm text-text-primary
                    outline-none
                    transition-all duration-200
                    hover:border-border-hover
                    focus:border-primary
                    focus:ring-2 focus:ring-primary-soft
                  "
                />
              </div>


              <div className="space-y-2">
                <label className="block text-sm font-medium text-text-secondary">
                  End Date
                </label>

                <input
                  type="date"
                  className="
                    h-11 w-full rounded-lg
                    border border-border
                    bg-bg-tertiary
                    px-3
                    text-sm text-text-primary
                    outline-none
                    transition-all duration-200
                    hover:border-border-hover
                    focus:border-primary
                    focus:ring-2 focus:ring-primary-soft
                  "
                />
              </div>


              <div className="space-y-2">
                <label className="block text-sm font-medium text-text-secondary">
                  Membership Amount
                </label>

                <input
                  type="number"
                  placeholder="Enter amount"
                  className="
                    h-11 w-full rounded-lg
                    border border-border
                    bg-bg-tertiary
                    px-3
                    text-sm text-text-primary
                    placeholder:text-text-muted
                    outline-none
                    transition-all duration-200
                    hover:border-border-hover
                    focus:border-primary
                    focus:ring-2 focus:ring-primary-soft
                  "
                />
              </div>

            </div>

          </section>


          {/* Emergency Contact */}
          <section className="border-b border-border py-7">

            <div className="mb-5">
              <h3 className="text-sm font-semibold text-text-primary">
                Emergency Contact
              </h3>

              <p className="mt-1 text-xs text-text-muted">
                Contact information for emergencies.
              </p>
            </div>


            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <div className="space-y-2">
                <label className="block text-sm font-medium text-text-secondary">
                  Contact Name
                </label>

                <input
                  type="text"
                  placeholder="Enter contact name"
                  className="
                    h-11 w-full rounded-lg
                    border border-border
                    bg-bg-tertiary
                    px-3
                    text-sm text-text-primary
                    placeholder:text-text-muted
                    outline-none
                    transition-all duration-200
                    hover:border-border-hover
                    focus:border-primary
                    focus:ring-2 focus:ring-primary-soft
                  "
                />
              </div>


              <div className="space-y-2">
                <label className="block text-sm font-medium text-text-secondary">
                  Relationship
                </label>

                <input
                  type="text"
                  placeholder="e.g. Father"
                  className="
                    h-11 w-full rounded-lg
                    border border-border
                    bg-bg-tertiary
                    px-3
                    text-sm text-text-primary
                    placeholder:text-text-muted
                    outline-none
                    transition-all duration-200
                    hover:border-border-hover
                    focus:border-primary
                    focus:ring-2 focus:ring-primary-soft
                  "
                />
              </div>


              <div className="space-y-2">
                <label className="block text-sm font-medium text-text-secondary">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="
                    h-11 w-full rounded-lg
                    border border-border
                    bg-bg-tertiary
                    px-3
                    text-sm text-text-primary
                    placeholder:text-text-muted
                    outline-none
                    transition-all duration-200
                    hover:border-border-hover
                    focus:border-primary
                    focus:ring-2 focus:ring-primary-soft
                  "
                />
              </div>

            </div>

          </section>


          {/* Fitness */}
          <section className="pt-7">

            <div className="mb-5">
              <h3 className="text-sm font-semibold text-text-primary">
                Fitness Details
              </h3>

              <p className="mt-1 text-xs text-text-muted">
                Basic fitness information.
              </p>
            </div>


            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <div className="space-y-2">
                <label className="block text-sm font-medium text-text-secondary">
                  Height (cm)
                </label>

                <input
                  type="number"
                  placeholder="Enter height"
                  className="
                    h-11 w-full rounded-lg
                    border border-border
                    bg-bg-tertiary
                    px-3
                    text-sm text-text-primary
                    placeholder:text-text-muted
                    outline-none
                    transition-all duration-200
                    hover:border-border-hover
                    focus:border-primary
                    focus:ring-2 focus:ring-primary-soft
                  "
                />
              </div>


              <div className="space-y-2">
                <label className="block text-sm font-medium text-text-secondary">
                  Weight (kg)
                </label>

                <input
                  type="number"
                  placeholder="Enter weight"
                  className="
                    h-11 w-full rounded-lg
                    border border-border
                    bg-bg-tertiary
                    px-3
                    text-sm text-text-primary
                    placeholder:text-text-muted
                    outline-none
                    transition-all duration-200
                    hover:border-border-hover
                    focus:border-primary
                    focus:ring-2 focus:ring-primary-soft
                  "
                />
              </div>


              <div className="space-y-2">
                <label className="block text-sm font-medium text-text-secondary">
                  Fitness Goal
                </label>

                <select
                  className="
                    h-11 w-full rounded-lg
                    border border-border
                    bg-bg-tertiary
                    px-3
                    text-sm text-text-primary
                    outline-none
                    transition-all duration-200
                    hover:border-border-hover
                    focus:border-primary
                    focus:ring-2 focus:ring-primary-soft
                  "
                >
                  <option value="">Select goal</option>
                  <option>Weight Loss</option>
                  <option>Muscle Gain</option>
                  <option>Strength</option>
                  <option>General Fitness</option>
                  <option>Endurance</option>
                </select>
              </div>


              <div className="space-y-2">
                <label className="block text-sm font-medium text-text-secondary">
                  Trainer
                </label>

                <select
                  className="
                    h-11 w-full rounded-lg
                    border border-border
                    bg-bg-tertiary
                    px-3
                    text-sm text-text-primary
                    outline-none
                    transition-all duration-200
                    hover:border-border-hover
                    focus:border-primary
                    focus:ring-2 focus:ring-primary-soft
                  "
                >
                  <option value="">Assign trainer</option>
                  <option>Trainer 1</option>
                  <option>Trainer 2</option>
                </select>
              </div>


              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-medium text-text-secondary">
                  Medical Notes
                </label>

                <textarea
                  rows="3"
                  placeholder="Enter relevant medical information"
                  className="
                    w-full resize-none rounded-lg
                    border border-border
                    bg-bg-tertiary
                    px-3 py-2.5
                    text-sm text-text-primary
                    placeholder:text-text-muted
                    outline-none
                    transition-all duration-200
                    hover:border-border-hover
                    focus:border-primary
                    focus:ring-2 focus:ring-primary-soft
                  "
                />
              </div>

            </div>

          </section>

        </div>


        {/* Footer */}
        <div className="flex items-center justify-end gap-3 border-t border-border bg-bg-secondary px-6 py-4">

          <button
            type="button"
            className="
              rounded-lg
              border border-border
              bg-transparent
              px-4 py-2.5
              text-sm font-medium
              text-text-secondary
              transition-all duration-200
              hover:border-border-hover
              hover:bg-bg-tertiary
              hover:text-text-primary
            "
          >
            Cancel
          </button>

          <button
            type="button"
            className="
              rounded-lg
              bg-primary
              px-5 py-2.5
              text-sm font-semibold
              text-bg-primary
              shadow-sm shadow-primary-glow
              transition-all duration-200
              hover:bg-primary-hover
              hover:shadow-md hover:shadow-primary-glow
              focus:outline-none
              focus:ring-2 focus:ring-primary-soft
              active:scale-[0.99]
            "
          >
            Add Member
          </button>

        </div>

      </div>

    </div>
  );
};

export default AddMember;