---
layout: post
title:  "遂にMacBookProの発熱問題を克服した！"
date:  2014-07-26 15:34:14
categories: mac
status: publish
entryId:1782
---
![front](https://farm3.staticflickr.com/2932/14565708538_24e6e3e24c.jpg)

いやぁ、長かった。僕を良く知る友人からは @drikin は発熱発熱うるさいって言われるくらいコンピュータやガジェットの発熱にはうるさい僕ですが(汗)、一番の問題であったMacBookPro Retinaの発熱問題を遂に克服しました！

[backspace.fm #032](http://backspace.fm/episode/032/)では、[GPUを常に独立側に固定するとよいという記事](http://machmachines.com/macbook-pro-retina-overheating-fix-now/)なども紹介しましたが、結果的に一番有効だったのは、最も正攻法なファンのコントロールでした。

以前からファン制御系のユーティリティーは愛用してましたが、今回、改めて一通りこの手のアプリを試してみて、安定度や最新OSへの対応具合、機能など総合的に見て良さそうだなと判断したのが、Macs Fan Controlです。

Macs Fan Controlのダウンロードは↓から

> [Macs Fan Control - control fans of any Mac & Boot Camp! | CRYSTALIDEA Software](http://www.crystalidea.com/macs-fan-control)

このアプリのポイントは、各種センサーの温度をチェックして、ファンの回転数をコントロールできるところ。

今回、僕の作戦としては、ちょっとでもパームレストが暖かくなってきて、不快になる温度になったら、早めにファンを回して、すぐに温度をさげるという方針をトライしてみたところ、パームレスト上の熱問題はほぼ完全に解決されました。

具体的には、下のスクリーンショットのように、CPU Core 1の温度をチェックして、標準のシステムのファン制御なら全然ファンが回らないような低い温度から積極的にファンを回していく設定にしてます。

![Screen Shot 2014-07-26 at 15.32.34](https://farm6.staticflickr.com/5578/14729365416_78a4f52e85_c.jpg)

ポイントは、ファン速度が増加をはじめる温度と最大温度。ここで設定した温度幅で、ファンの回転数がリニアに上昇するので、僕の場合、どちらの値も低めに設定して、ちょっとでも温度が上がったら、一気にファンを回して冷やし、またファン速度を落とすみたいな、ちょっとピーキーな設定を試してます。

このくらい極端に設定すると、パームレストの発熱は完全に抑えられますが、ちょっとなにか作業するとすぐにファンが回り始めてうるさいです。

僕の場合、 **発熱問題軽減＞＞＞ファンノイズ** くらい優先度が違うのと、ノイズキャンセルヘッドフォン併用してることが多いので、この設定でも問題ないですが、静かな場所とか、会議中とかだと、ファンがうるさくて迷惑かけることがあるので、その時は、自動制御に設定を戻したりしてます。

一回設置を自動制御に戻すと、またセンサー制御に戻すときに温度設定がリセットされるので、出来ればいくつかプリセットにして切り替えられたら嬉しいなぁと思ったりはしますが、思ったよりバッテリーの減りは気にならないし、GPUも自動設定するように戻しました。

あ、一つ、注意点としては、パームレストの熱問題は解決されましたが、ファンがガンガン回るようになるので、本体裏面の発熱は悪化する感じです。特にファンが回ると、隙間から熱風が吹き出てくるので、直接ももの上にMBP置いて作業してたりすると、今度は足が焼けますw

まぁ、それだけ排熱してると考えれば、効果が有る証ですが、気をつけてください。

ほんとパームレストが熱くないMBPは快適この上ないっていうか最高！24時間使っていたくなりますw

<br>
<iframe src="http://rcm-fe.amazon-adsystem.com/e/cm?t=driftking-22&o=9&p=12&l=bn1&mode=videogames-jp&browse=637394&fc1=000000&lt1=_blank&lc1=3366FF&bg1=FFFFFF&f=ifr" marginwidth="0" marginheight="0" width="300" height="250" border="0" frameborder="0" style="border:none;" scrolling="no"></iframe>
<iframe src="http://rcm-fe.amazon-adsystem.com/e/cm?t=driftking-22&o=9&p=12&l=bn1&mode=computers-jp&browse=2127209051&fc1=000000&lt1=_blank&lc1=3366FF&bg1=FFFFFF&f=ifr" marginwidth="0" marginheight="0" width="300" height="250" border="0" frameborder="0" style="border:none;" scrolling="no"></iframe>

