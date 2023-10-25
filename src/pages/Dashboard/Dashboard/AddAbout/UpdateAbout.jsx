const UpdateAbout = () => {
    return (
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-center">Update About Content </h2>
        <div className="w-full mx-auto addServicesWrap">
          <form>
            <div className="formControl">
              <div className="singleForm">
                <label>About Title </label>
                <input
                  name="city"
                  placeholder="About Title"
                  type="text"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
              <div className="singleForm">
                <label>About Sub Title </label>
                <input
                  name="city"
                  placeholder="About Sub Title"
                  type="text"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
              <div className="singleForm">
                <label>Management Name </label>
                <input
                  name="city"
                  placeholder="Management Name"
                  type="text"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
              <div className="singleForm">
                <label>Management Position </label>
                <input
                  name="city"
                  placeholder="Management Position  "
                  type="text"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
              <div className="singleForm">
                <label>Management Description </label>
                <input
                  name="city"
                  placeholder="Management Description  "
                  type="text"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
              <div className="singleForm">
                <label>Mission Description </label>
                <input
                  name="city"
                  placeholder="Mission Description "
                  type="text"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
  
              <div className="singleForm">
                <label>Vission Descripton </label>
                <input
                  name="city"
                  placeholder="Vission Descripton "
                  type="text"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
              <div className="singleForm">
                <label>Team Name </label>
                <input
                  name="city"
                  placeholder="Team Name "
                  type="text"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
              <div className="singleForm">
                <label>Team Position </label>
                <input
                  name="city"
                  placeholder="Team Position "
                  type="text"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
              <div className="singleForm">
                <label>Team Description </label>
                <input
                  name="city"
                  placeholder="Team Description  "
                  type="text"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
              <div className="singleForm">
                <label>Image Upload </label>
                <input
                  type="file"
                  multiple={true}
                  accept="image/*"
                  placeholder="Upload Images"
                  className="file-input file-input-bordered  w-full "
                  autoComplete="off"
                />
            
              </div>
              <div className="singleForm">
                <label> Description </label>
                <textarea
                  name="description"
                  placeholder="Description"
                  id=""
                  cols="30"
                  rows="10"
                  autoComplete="off"
                ></textarea>
              </div>
            </div>
  
            <div className="formControl">
              <button className="submitBtn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default UpdateAbout;
  