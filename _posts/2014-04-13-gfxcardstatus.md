---
layout: post
title:  "レビュー - MacBook ProのGPUを制御してバッテリー発熱と持続時間をコントロール"
date:   2014-04-13 18:22:26
categories: mac
---

<a class='flickr2tag-img' href='http://www.flickr.com/photo.gne?id=13836045433' title='Screen Shot 2014-04-13 at 6.18.34 PM'><img src='http://farm4.staticflickr.com/3766/13836045433_17ee970257.jpg' alt='Screen Shot 2014-04-13 at 6.18.34 PM'></a>

このネタ、去年の年末から書こう書こうと思ってたのに、ずーーーっと忘れてました。。。(汗) 独立GPUを持つMacBook Proを使ってる人には必須とも言えるこのユーティリティ。現在の僕のメインマシンであるMacBookPro Retina 15inchでも必須中の必須アプリなので紹介します。

> [gfxCardStatus by cody krieger](http://gfx.io/)

ともあれ、まずは↑の公式ホームページからアプリをダウンロードしてアプリケーションフォルダにインストールしてください。アプリはステータスバー常駐型の非常にシンプルなアプリケーションです。

起動するとステータスバーにiという文字のアイコンが表示されると思います。基本的に操作はこのアイコンをクリックしたときに表示されるメニュー↑だけ。

メニューの真ん中あたりにIntegrated Only/Discrete Only/Dynamic Switchingというメニューがあって、基本はここを変えるだけです。

標準ではDynamic Switchingになってると思います。これはOS Xが自動的に内蔵と独立GPUを切り替えるという標準のモードです。これをIntegrated Onlyに切り替えれば、仮にアプリケーションが独立GPUを要求しても内蔵GPUで稼働します。Discrete Onlyは逆で、常に独立GPUで動きます。

これの何が嬉しいかというと、バッテリー稼働時間と発熱のコントロールです。AC電源を利用してるときはあまり気にならないかもしれませんが、バッテリー稼働時にGPUが独立側に切り替わるとみるみるバッテリーが消費されていきます。また、発熱も高くなります。

正直今時の内蔵GPUは十分高速なので、通常は常にIntegrated Onlyでも全く問題が無いと思います。(だったら独立GPU内蔵モデル買わなければ良かったという話もあるけど、まぁ、備わってる安心感的なものもあるので、、、汗)

もう一つ、このアプリの非常に便利な点は、GPUが切り替わったことをNotificationで教えてくれる事です。仮に強制的にGPU切り替える必要が無くても、今どちらのGPUが稼働しているかという情報はかなり有益だったりします。というのもたまに行儀の悪いアプリケーションがGPUを独立側に切り替えたまま、内蔵に戻してくれないからです。

特にAdobe Creative Cloudのステータスバーに常駐してるアップデート管理してくれるツールとか、ATOKみたいな常駐系のアプリケーションが独立GPU側に切り替えると、そのままMacを再起動するまでGPUが戻らないなんて事もあります。多分かなり多くの人がこの事実に気づかないまま使ってるんじゃ無いかなぁ。

自分のMacBookProのバッテリー稼働時間が明らかに短いと思ってる人はこれ疑ってみるとよいですよ。

一個だけ気をつける点は、gfxCardStatusでGPUを切り替える前に、アプリケーションがGPUを切り替えちゃってると、独立→内蔵にGPUが切り替えられなくなります。事前に切り替えておく必要があると言うことです。

<a class='flickr2tag-img' href='http://www.flickr.com/photo.gne?id=13836330293' title='Screen Shot 2014-04-13 at 6.34.41 PM'><img src='http://farm4.staticflickr.com/3740/13836330293_f0c2c91e86.jpg' alt='Screen Shot 2014-04-13 at 6.34.41 PM'></a>

ちなみに、Mavericksのアクティビティーモニターからは、エナジーというタブからRequires High Pref GPUという情報がチェックできるようになっていて、ここでどのアプリが独立GPUを必要としているのかチェックすることが出来ます。↑の例でもCreative Cloudが独立GPUを要求してることが分かります。

バックグランドで稼働する系のアプリがGPUを切り替えてしまったら、ここから強制終了しちゃえばGPUを切り替えることが出来ます。

ということで、対応したMacBookProを持っている人には絶賛オススメしたいアプリです。

バッテリーの持ちが明らかに変わりますよ！やっとこの記事が書けて良かった！スッキリ！

<iframe src="http://rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=driftking-22&o=9&p=8&l=as4&m=amazon&f=ifr&ref=ss_til&asins=B00G55EJWO" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>

