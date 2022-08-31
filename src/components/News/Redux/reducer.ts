import {AnyAction} from "redux";

type INewsReducer = typeof initialState

let initialState = {
    news: [
        {
            urlNews: 'https://news.google.com/articles/CBMiY2h0dHBzOi8vdWEua29ycmVzcG9uZGVudC5uZXQvc2hvd2Jpei9jaW5lbWEvNDUwNzY5Ny1zdGFsby12aWRvbW8tc2Noby1zdXB1dG55ay1wcnl0dWx5LWRhc3QtdWtyYWluadIBWGh0dHBzOi8vdWEua29ycmVzcG9uZGVudC5uZXQvYW1wLzQ1MDc2OTctc3RhbG8tdmlkb21vLXNjaG8tc3VwdXRueWstcHJ5dHVseS1kYXN0LXVrcmFpbmk?hl=uk&gl=UA&ceid=UA%3Auk',
            src: 'https://kor.ill.in.ua/m/610x385/2761526.jpg',
            id: 2,
            title: "Стало відомо, що \"супутник Притули\" дасть Україні"
        },
        {
            urlNews: 'https://news.google.com/articles/CAIiEKED0Desj-tdImTLrgi10iEqGQgEKhAIACoHCAow_o-FCzDVmIIDMK2vhQY?uo=CAUiXGh0dHBzOi8vdGVjaHRvZGF5LmluLnVhL3RpcHMveWFrLXZ5ZGFseWF0eS1wb3Z0b3Jlbm55YS1kYW55aC12LWdvb2dsZS10YWJseXRzeWFoLTE1NDQ1MC5odG1s0gEA&hl=uk&gl=UA&ceid=UA%3Auk',
            src: 'https://techtoday.in.ua/wp-content/uploads/2022/08/google-tables_9328.jpg',
            id: 3,
            title: 'Як видаляти повторення даних в Google Таблицях'
        },
        {
            urlNews: 'https://news.google.com/articles/CAIiEBcI0Rne6pyf-BpCCqgeKt0qMwgEKioIACIQvB9eLCzU5fUMtq_vhQzS7yoUCAoiELwfXiws1OX1DLav74UM0u8wkNbQBg?uo=CAUiI2h0dHBzOi8vaXRlY2h1YS5jb20vYXJ0aWNsZXMvMTgzOTUz0gEA&hl=uk&gl=UA&ceid=UA%3Auk',
            src: 'https://itechua.com/wp-content/uploads/2022/08/Screenshot_1-18-768x443.jpg',
            id: 4,
            title: 'Хронологія Google: що це таке і як нею користуватися'
        },
        {
            urlNews: 'https://news.google.com/articles/CAIiEMvSR65NVSWT1u-JNC6YOi4qGQgEKhAIACoHCAowhLCNCzDqrp8DMNau-AY?uo=CAUiWmh0dHBzOi8vd3d3LmF2dG9taXIudWEvbWV3cy93b3JsZHdpZGUvbmF6dmFuby1uYWpuYWRpam5pc2hpLWFtZXJ5a2Fuc2tpLWF2dG9tb2JpbGktMTk4MC1oL9IBAA&hl=uk&gl=UA&ceid=UA%3Auk',
            src: 'https://www.avtomir.ua/wp-content/uploads/2022/08/b68da9e634b724273dc2b85b75f4b270e461225a.jpg',
            id: 5,
            title: 'Названо найнадійніші американські автомобілі 1980-х'
        }
    ]
};


const newsReducer = (state = initialState, action: AnyAction): INewsReducer => {
    switch (action.type) {
        default:
            return state;
    }
};

export default newsReducer;