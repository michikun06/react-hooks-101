import React, { useContext } from 'react'

// DELETE_EVENTがタイポの場合エラーが出ずにバグが発生し、見つけるのが困難
// 下記のように外部から入れることでタイポ、バグを即座に発見することができる
import { DELETE_EVENT } from '../actions'
import AppContext from '../contexts/AppContext'

const Event = ({ event }) => {
    const { dispatch } = useContext(AppContext)
    const id = event.id
    // 個別のイベントを削除
    const handleClickDeleteButton = () => {
        const result = window.confirm(`イベント(id : ${id})を本当に削除してもよろしいですか？`)
        // importしたDELETE_EVENTを利用することで、バグを発見しやすくなる
        if (result) dispatch({ type: DELETE_EVENT, id })
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td><button type='button' className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
        </tr>
    )
}

export default Event