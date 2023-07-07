import React from "react";
import { useState } from "react";
import TitleForm from "../TitleForm/TitleForm";
import s from './UploadForm.module.scss';
import { isActive } from "../../../utils/isActive";

const UploadForm = ({ title, text, titleBtn = 'Upload', style }) => {
	const [fieldText, setFieldText] = useState(text);
	const [fileSelected, setFileSelected] = useState(false);

	const onChangeHandler = e => {
		setFieldText(e.currentTarget.files[0].name);
		setFileSelected(true);
	}

	return (
		<>
			<TitleForm title={title} />

			<label className={s.upload} style={style ? style : {}}>
				<input
					type='file'
					className={s.upload__input}
					onChange={e => { onChangeHandler(e) }}
				/>
				<p className={`${s.upload__field} ${isActive(fileSelected, s.selected)}`}>
					{fieldText}
				</p>
				<div className={`${s.upload__btn} button`}>{titleBtn}</div>
			</label>
		</>
	)
}

export default UploadForm;