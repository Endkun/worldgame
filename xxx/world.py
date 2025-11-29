import matplotlib.pyplot as plt
import matplotlib.image as mpimg

# 画像の読み込み (アップロードされたファイル名を指定)
img_path = 'world_map.png'
img = mpimg.imread(img_path)

# プロットの準備
fig, ax = plt.subplots(figsize=(12, 8))
ax.imshow(img)

# 画像のサイズを取得
height, width = img.shape[:2]

# 位置座標の定義 (画像の幅・高さに対する割合で指定しています)
# ※地図の図法によって微妙なズレが生じるため、目視で調整した値を設定しています
locations = {
    "Paris":  {"x": 0.095, "y": 0.285}, # フランス北部
    "Moscow": {"x": 0.195, "y": 0.225}, # ロシア西部
    "Mumbai": {"x": 0.288, "y": 0.465}  # インド西海岸
}

# 点をプロット
for city, pos in locations.items():
    x_pixel = pos["x"] * width
    y_pixel = pos["y"] * height
    
    # 黒い点を描画
    ax.plot(x_pixel, y_pixel, marker='o', color='black', markersize=8)

# 軸を非表示にする
ax.axis('off')

# 余白を削除して保存・表示
plt.tight_layout()
plt.show()