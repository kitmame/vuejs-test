// いくつかのコンポーネントを定義します
var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
})

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
})

// router は、レンダリングするために1つの root コンポーネントが必要です
// デモ目的向けで、app テンプレートとして HTML を使用しているため、空を使用します
var App = Vue.extend({})

// router インスタンスを作成。
// ここでは追加的なオプションで渡すことができますが、今はシンプルに保っています
var router = new VueRouter()

// いくつかの routes を定義します
// route 毎、コンポーネントにマップが必要です
// "component" は 事実上コンポーネントコンストラクタは Vue.extend() 経由で作成されるか、
// または適切なコンポーネントオプションオブジェクトでできます
// nested routes については後で話します
router.map({
    '/foo': {
        component: Foo
    },
    '/bar': {
        component: Bar
    }
})

// 今 アプリケーションを開始することが出来ます！
// router は App のインスタンスを作成し、
// そして #app セレクタでマッチングした要素にマウントします
router.start(App, '#app')
