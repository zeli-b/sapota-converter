import json

import clipboard


def main():
    mappings = {
        "a": "阿",
        "o": "于",
        "u": "友",
        "i": "屎",
        "e": "意",
        "ga": "我",
        "go": "吾",
        "gu": "久",
        "gi": "冀",
        "ge": "解",
        "na": "南",
        "no": "奴",
        "nu": "女",
        "ni": "尼",
        "ne": "年",
        "ma": "萬",
        "mo": "無",
        "mu": "矛",
        "mi": "美",
        "me": "買",
        "sa": "娑",
        "so": "素",
        "su": "秀",
        "si": "四",
        "se": "思",
        "da": "多",
        "do": "圖",
        "du": "晝",
        "di": "遅",
        "de": "地",
        "va": "方",
        "vo": "步",
        "vu": "負",
        "vi": "鼻",
        "ve": "皮",
        "za": "作",
        "zo": "足",
        "zu": "酒",
        "zi": "自",
        "ze": "子",
        "la": "羅",
        "lo": "路",
        "lu": "流",
        "li": "利",
        "le": "里",
        "xa": "向",
        "xo": "數",
        "xu": "手",
        "xi": "師",
        "xe": "瞬",
        "ka": "可",
        "ko": "庫",
        "ku": "丘",
        "ki": "器",
        "ke": "起",
        "ta": "他",
        "to": "土",
        "tu": "丑",
        "ti": "絺",
        "te": "恥",
        "ca": "札",
        "co": "主",
        "cu": "周",
        "ci": "指",
        "ce": "事",
        "ça": "差",
        "ço": "取",
        "çu": "秋",
        "çi": "次",
        "çe": "此",
        "pa": "拍",
        "po": "僕",
        "pu": "副",
        "pi": "丕",
        "pe": "派",
        "ha": "何",
        "ho": "雨",
        "hu": "佑",
        "hi": "䨳",
        "he": "喜",
        "ra": "弱",
        "ro": "乳",
        "ru": "柔",
        "ri": "二",
        "re": "耳",
        "fa": "保",
        "fo": "付",
        "fu": "不",
        "fi": "悲",
        "fe": "被",
    }

    raw_rows = clipboard.paste().split("\n")
    for i, raw_row in enumerate(raw_rows):
        if i == 0:
            continue

        row = raw_row.split("\t")

        if row[9]:
            mappings[row[1]] = row[9]

    with open("./zasospiqua_map.json", "w", encoding="utf-8") as file:
        json.dump(mappings, file, ensure_ascii=False)


if __name__ == "__main__":
    main()
