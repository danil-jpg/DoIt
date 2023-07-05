import React from "react";
import TitleForm from "../TitleForm/TitleForm";
import s from './UploadForm.module.scss';

const UploadForm = ({ title, text, style }) => {

	const onChangeHandler = e => {
		console.log(e.currentTarget)
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
				<p className={s.upload__field}>lol</p>
				<div className={`${s.upload__btn} button`}>Upload</div>
			</label>
		</>
	)
}

export default UploadForm;