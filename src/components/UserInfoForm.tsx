import { useState } from "react";

export default function UserInfoForm() {
  // 유저 이름, 이메일
  const [infoForm, setInfoForm] = useState({
    name: "",
    email: "",
  });
  const handleFormState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfoForm((infoForm) => ({
      ...infoForm,
      [e.target.name]: e.target.value,
    }));
  };

  // 유저 성별
  const [genderState, setGenderState] = useState({
    gender: "",
  });
  const handleGenderState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGenderState((genderState) => ({
      ...genderState,
      [e.target.name]: e.target.value,
    }));
  };

  // 유저의 관심 기술
  const [skillState, setSkillState] = useState<string[]>([]);
  const handleSkillState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSkillState((prev) =>
      checked ? [...prev, value] : prev.filter((skill) => skill !== value),
    );
  };

  // 자기소개
  const [bio, setBio] = useState("");
  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };

  // 제출 버튼 클릭 시 넘어가기 방지하고 콘솔에 출력
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(infoForm.name);
    console.log(infoForm.email);
    console.log(genderState);
    console.log(skillState);
    console.log(bio);
  };

  return (
    <div className="user-info">
      <h1 className="user-info__title">User Information</h1>
      <form className="user-info__form">
        <div className="form-group">
          <label className="form-group__label" htmlFor="name">
            이름: {infoForm.name}
          </label>
          <input
            className="form-group__input"
            type="text"
            name="name"
            id="name"
            onChange={handleFormState}
          />
        </div>

        <div className="form-group">
          <label className="form-group__label" htmlFor="email">
            이메일: {infoForm.email}
          </label>
          <input
            className="form-group__input"
            type="email"
            name="email"
            id="email"
            onChange={handleFormState}
          />
        </div>

        <div className="form-group form-group--radio">
          <label className="form-group__label">
            성별: {genderState.gender}
          </label>
          <label className="form-group__radio">
            <input
              type="radio"
              id="male"
              name="gender"
              value="남성"
              checked={genderState.gender === "남성"}
              onChange={handleGenderState}
            />
            남성
          </label>
          <label className="form-group__radio">
            <input
              type="radio"
              id="female"
              name="gender"
              value="여성"
              checked={genderState.gender === "여성"}
              onChange={handleGenderState}
            />
            여성
          </label>
        </div>

        <div className="form-group form-group--checkbox">
          <label className="form-group__label">관심 기술:</label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value="JavaScript"
              name="JavaScript"
              checked={skillState.includes("JavaScript")}
              onChange={handleSkillState}
            />
            JavaScript
          </label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value="React"
              name="React"
              checked={skillState.includes("React")}
              onChange={handleSkillState}
            />
            React
          </label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value="Node.js"
              name="Node.js"
              checked={skillState.includes("Node.js")}
              onChange={handleSkillState}
            />
            Node.js
          </label>
        </div>

        <div className="form-group">
          <label className="form-group__label" htmlFor="bio">
            자기소개: {bio}
          </label>
          <textarea
            className="form-group__textarea"
            id="bio"
            name="bio"
            value={bio}
            placeholder="자기소개를 작성해주세요"
            onChange={handleTextArea}
          ></textarea>
        </div>

        <button
          className="user-info__submit"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          제출
        </button>
      </form>

      <div className="preview">
        <h2 className="preview__title">실시간 입력값</h2>
        <p className="preview__item">이름: {infoForm.name}</p>
        <p className="preview__item">이메일: {infoForm.email}</p>
        <p className="preview__item">성별: {genderState.gender}</p>
        <p className="preview__item">관심 기술: {skillState.join(", ")}</p>
        <p className="preview__item">자기소개: </p>
        <pre>{bio}</pre>
      </div>
    </div>
  );
}
