import { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened, userInfo, setUserInfo }) {
  const theme = useMantineTheme();

  // Local state for form inputs
  const [formData, setFormData] = useState({
    firstName: userInfo.firstName || "",
    lastName: userInfo.lastName || "",
    worksAt: userInfo.worksAt || "",
    livesIn: userInfo.livesIn || "",
    country: userInfo.country || "",
    relationshipStatus: userInfo.relationshipStatus || "",
    profileImg: null, // Optional upload
    coverImg: null,   // Optional upload
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file uploads (optional)
  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  // Save changes
  const handleSave = (e) => {
    e.preventDefault();
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      ...formData,
      profileImg: formData.profileImg || prevUserInfo.profileImg, // Keep old if not changed
      coverImg: formData.coverImg || prevUserInfo.coverImg,       // Keep old if not changed
    }));
    setModalOpened(false); // Close modal
  };

  return (
    <Modal
      overlayColor={theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm" onSubmit={handleSave}>
        <h3>Your Info</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />

          <input
            type="text"
            className="infoInput"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAt"
            placeholder="Works at"
            value={formData.worksAt}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="livesIn"
            placeholder="Lives in"
            value={formData.livesIn}
            onChange={handleChange}
          />

          <input
            type="text"
            className="infoInput"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="relationshipStatus"
            placeholder="Relationship Status"
            value={formData.relationshipStatus}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Profile Image (Optional)</label>
          <input type="file" name="profileImg" onChange={handleFileChange} />
          
          <label>Cover Image (Optional)</label>
          <input type="file" name="coverImg" onChange={handleFileChange} />
        </div>

        <button type="submit" className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
