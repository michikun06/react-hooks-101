// action={
//      type: 'CREATE_EVENTS',
//      title: '2020年東京オリンピックについてのお知らせ',
//      body: '2020年に東京腕オリンピックを開催いたします！！つきましては、、、、'
// }
// 
// 
// #before
// state = []
// 
// #after
// state = [
//     {
//         id: 1,
//         title: '2020年東京オリンピックについてのお知らせ',
//         body: '2020年に東京腕オリンピックを開催いたします！！つきましては、、、、'
//     }
// ]
// 
// 
// 
// #before
// state = [
//    { id: 1, title: 'タイトル1', body: 'ボディー1' },
//    { id: 2, title: 'タイトル2', body: 'ボディー2' },
//    { id: 3, title: 'タイトル3', body: 'ボディー3' },
// ]
// 
// #after
// state = [
//    { id: 1, title: 'タイトル1', body: 'ボディー1' },
//    { id: 2, title: 'タイトル2', body: 'ボディー2' },
//    { id: 3, title: 'タイトル3', body: 'ボディー3' },
//    {
//      id: 4,
//      title: '2020年東京オリンピックについてのお知らせ',
//      body: '2020年に東京腕オリンピックを開催いたします！！つきましては、、、、'
//     }
// ]


const events = (state = [], action) => {
    switch (action.type) {

        // 配列に新たなTodoを追加する。
        case 'CREATE_EVENT':

            // ActionCreatorにて作成された「title」と「body」を定義したeventに入れておく
            const event = { title: action.title, body: action.body }

            // 配列にid番号をつけるために、現在の配列の中身を確認しておく
            const length = state.length

            // 配列のなかにTodoがない場合（length === 0）は「id = 1」となり、
            // Todoが１つでもある場合は末尾の数字を受け取り、その数字に１を足したidを作成する
            const id = length === 0 ? 1 : state[length - 1].id + 1

            // 既存のstateに、新たに作成したidとevent配列を追加してreturnする。
            return [...state, { id, ...event }]


        // 配列内の指定したTodoを削除する。
        case 'DELETE_EVENT':
            return state

        // 配列内の全てのTodoを削除する。
        case 'DELETE_EVENTS':
            return []

        default:
            return state
    }
}

export default events