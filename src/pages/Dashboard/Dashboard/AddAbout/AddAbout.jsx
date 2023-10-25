import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddAbout = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate()
const onSubmit = (data) => {
  console.log(data)
};

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Add About Content </h2>
      <div className="w-full mx-auto addServicesWrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formControl">
            <div className="singleForm">
              <label>About Title </label>
              <input
               {...register("name", { required: true })}
                name="title"
                placeholder="About Title"
                type="text"
                className="inputField"
                autoComplete="off"
              />

            </div>
            <div className="singleForm">
              <label>About Sub Title </label>
              <input
                {...register("subtitle", { required: true })}
                name="subtitle"
                placeholder="About Sub Title"
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Management Name </label>
              <input
                {...register("managementName", { required: true })}
                name="managementName"
                placeholder="Management Name"
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Management Position </label>
              <input
               {...register("position", { required: true })}
                name="position"
                placeholder="Management Position  "
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Management Description </label>
              <input
               {...register("description", { required: true })}
                name="description"
                placeholder="Management Description  "
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Mission Description </label>
              <input
                  {...register("missionDescription", { required: true })}
                name="missionDescription"
                placeholder="Mission Description "
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>

            <div className="singleForm">
              <label>Vission Descripton </label>
              <input
              {...register("vissionDescription", { required: true })}
                name="vissionDescription"
                placeholder="Vission Descripton "
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Team Name </label>
              <input
              {...register("teamName", { required: true })}
                name="teamName"
                placeholder="Team Name "
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Team Position </label>
              <input
               {...register("teamPosition", { required: true })}
                name="teamPosition"
                placeholder="Team Position "
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Team Description </label>
              <input
               {...register("teamDescriptions", { required: true })}
                name="teamDescriptions"
                placeholder="Team Description  "
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Image Upload </label>
              <input
               {...register("photo", { required: true })}
               name='photo'
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
               {...register("message", { required: true })}
                name="message"
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

export default AddAbout;
