import "./ServiceData.css";

const UpdateServices = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Update Services</h2>
      <div className="w-full mx-auto addServicesWrap">
        <form>
          <div className="formControl">
            <div className="singleForm">
              <label>Name </label>
              <input
                name="country"
                placeholder="Name"
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label> Title </label>
              <input
                name="city"
                placeholder="Title"
                type="text"
                className="inputField"
                 autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label> Sub Title </label>
              <input
                name="city"
                placeholder="Sub Title"
                type="text"
                className="inputField"
                 autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Top Service Title </label>
              <input
                name="city"
                placeholder="Top Service Title"
                type="text"
                className="inputField"
                 autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Top Service Description </label>
              <input
                name="city"
                placeholder="Top Service Description "
                type="text"
                className="inputField"
                 autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>What we do Descripton </label>
              <input
                name="city"
                placeholder="What we do Descripton "
                type="text"
                className="inputField"
                 autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Products Descripton </label>
              <input
                name="city"
                placeholder="Products Descripton "
                type="text"
                className="inputField"
                 autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Products Descripton </label>
              <input
                name="city"
                placeholder="Products Descripton "
                type="file"
                className="inputField"
                 autoComplete="off"
              />
            </div>
            <div className="singleForm">
                <label> Description </label> 
                <textarea name="description" placeholder="Description" id="" cols="30" rows="10"  autoComplete="off"></textarea>
            </div>
          </div>

          <div className="formControl">
            <button className="submitBtn" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateServices;
