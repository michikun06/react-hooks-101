import React, { useState } from 'react'

const EventForm = ({ state, dispatch }) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addEvent = e => {
        // 画面の再読み込みを防止する
        e.preventDefault()

        // dispatchに三つを渡す
        dispatch({
            type: 'CREATE_EVENT',
            title,
            body
        })

        setTitle('')
        setBody('')
    }

    const deleteAllEvents = e => {
        e.preventDefault()
        const result = window.confirm("全てのイベントを本当に削除してもよろしいですか？")
        if (result) dispatch({ type: 'DELETE_ALL_EVENTS' })
    }

    // タイトルorボディが空の場合unCreatableが発動　→　「イベントを作成する」ボタンが非活性状態
    const unCreatable = title === '' || body === ''

    return (
        <>
            <h4>イベント作成フォーム</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="forEventTitle">タイトル</label>
                    <input className="form-control" id="forEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="forEventBody">ボディー</label>
                    <textarea className="form-control" id="forEventBody" value={body} onChange={e => setBody(e.target.value)} />
                </div>
                <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
                <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</button>
            </form>
        </>
    )
}

export default EventForm

