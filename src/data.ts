import { nanoid } from "nanoid";
import { ProductApiData } from "./shared/interfact";

export const product: ProductApiData = {
  id: `prod_${nanoid()}`,
  originalPrice: ["3,699", "4,699"],
  sellingPrice: ["2,999", "3,999"],
  discounts: ["街口結帳享九折優惠", "訂單滿 399 免運費"],
  orderingInfos: [
    "請於訂單備註填寫您需要的球員",
    "請於訂單備註填寫您需要的球員",
    "球員款客製訂單出貨需要十四個工作天",
  ],
  specCategories: [
    ["尺寸", "補充說明"],
    ["顏色", "補充說明"],
  ],
  specLabels: [
    ["S", "M", "L", "XL", "XXL"],
    ["酷炫黑", "紫旋風", "暴風紅", "耀眼黃", "我是第二行選項"],
  ],
  specs: [
    {
      id: `spec_${nanoid()}`,
      title:
        "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列[酷炫黑]",
      price: "2,999",
      stock: 0,
      images: [
        "/product1.png",
        "/product2.png",
        "/product3.png",
        "/product4.png",
      ],
      extraInfos: [
        { type: "商品分類", text: "這邊可以填寫純文字內容。" },
        {
          type: "商品描述",
          text: "靈感來自 90年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。",
        },
        {
          type: "商品備註",
          text: "請於訂單備註填寫您需要的號碼，若未填寫將以空白球衣寄出，客製化商品不接受退換貨。",
        },
      ],
      labels: ["S", "酷炫黑"],
    },
    {
      id: `spec_${nanoid()}`,
      title:
        "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列[酷炫黑]",
      price: "2,999",
      stock: 10,
      images: [
        "/product1.png",
        "/product2.png",
        "/product3.png",
        "/product4.png",
      ],
      extraInfos: [
        { type: "商品分類", text: "這邊可以填寫純文字內容。" },
        {
          type: "商品描述",
          text: "靈感來自 90年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。",
        },
        {
          type: "商品備註",
          text: "請於訂單備註填寫您需要的號碼，若未填寫將以空白球衣寄出，客製化商品不接受退換貨。",
        },
      ],
      labels: ["M", "酷炫黑"],
    },
    {
      id: `spec_${nanoid()}`,
      title:
        "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列[酷炫黑]",
      price: "2,999",
      stock: 10,
      images: [
        "/product1.png",
        "/product2.png",
        "/product3.png",
        "/product4.png",
      ],
      extraInfos: [
        { type: "商品分類", text: "這邊可以填寫純文字內容。" },
        {
          type: "商品描述",
          text: "靈感來自 90年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。",
        },
        {
          type: "商品備註",
          text: "請於訂單備註填寫您需要的號碼，若未填寫將以空白球衣寄出，客製化商品不接受退換貨。",
        },
      ],
      labels: ["L", "酷炫黑"],
    },
    {
      id: `spec_${nanoid()}`,
      title:
        "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列[酷炫黑]",
      price: "2,999",
      stock: 10,
      images: [
        "/product1.png",
        "/product2.png",
        "/product3.png",
        "/product4.png",
      ],
      extraInfos: [
        { type: "商品分類", text: "這邊可以填寫純文字內容。" },
        {
          type: "商品描述",
          text: "靈感來自 90年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。",
        },
        {
          type: "商品備註",
          text: "請於訂單備註填寫您需要的號碼，若未填寫將以空白球衣寄出，客製化商品不接受退換貨。",
        },
      ],
      labels: ["XL", "酷炫黑"],
    },
    {
      id: `spec_${nanoid()}`,
      title:
        "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列[酷炫黑]",
      price: "2,999",
      stock: 10,
      images: [
        "/product1.png",
        "/product2.png",
        "/product3.png",
        "/product4.png",
      ],
      extraInfos: [
        { type: "商品分類", text: "這邊可以填寫純文字內容。" },
        {
          type: "商品描述",
          text: "靈感來自 90年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。",
        },
        {
          type: "商品備註",
          text: "請於訂單備註填寫您需要的號碼，若未填寫將以空白球衣寄出，客製化商品不接受退換貨。",
        },
      ],
      labels: ["XXL", "酷炫黑"],
    },
    {
      id: `spec_${nanoid()}`,
      title:
        "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列[紫旋風]",
      price: "3,999",
      stock: 10,
      images: [
        "/product1.png",
        "/product2.png",
        "/product3.png",
        "/product4.png",
      ],
      extraInfos: [
        { type: "商品分類", text: "這邊可以填寫純文字內容。" },
        {
          type: "商品描述",
          text: "靈感來自 90年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。",
        },
        {
          type: "商品備註",
          text: "請於訂單備註填寫您需要的號碼，若未填寫將以空白球衣寄出，客製化商品不接受退換貨。",
        },
      ],
      labels: ["S", "紫旋風"],
    },
    {
      id: `spec_${nanoid()}`,
      title:
        "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列[紫旋風]",
      price: "3,999",
      stock: 10,
      images: [
        "/product1.png",
        "/product2.png",
        "/product3.png",
        "/product4.png",
      ],
      extraInfos: [
        { type: "商品分類", text: "這邊可以填寫純文字內容。" },
        {
          type: "商品描述",
          text: "靈感來自 90年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。",
        },
        {
          type: "商品備註",
          text: "請於訂單備註填寫您需要的號碼，若未填寫將以空白球衣寄出，客製化商品不接受退換貨。",
        },
      ],
      labels: ["M", "紫旋風"],
    },
    {
      id: `spec_${nanoid()}`,
      title:
        "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列[紫旋風]",
      price: "3,999",
      stock: 10,
      images: [
        "/product1.png",
        "/product2.png",
        "/product3.png",
        "/product4.png",
      ],
      extraInfos: [
        { type: "商品分類", text: "這邊可以填寫純文字內容。" },
        {
          type: "商品描述",
          text: "靈感來自 90年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。",
        },
        {
          type: "商品備註",
          text: "請於訂單備註填寫您需要的號碼，若未填寫將以空白球衣寄出，客製化商品不接受退換貨。",
        },
      ],
      labels: ["L", "紫旋風"],
    },
    {
      id: `spec_${nanoid()}`,
      title:
        "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列[紫旋風]",
      price: "3,999",
      stock: 10,
      images: [
        "/product1.png",
        "/product2.png",
        "/product3.png",
        "/product4.png",
      ],
      extraInfos: [
        { type: "商品分類", text: "這邊可以填寫純文字內容。" },
        {
          type: "商品描述",
          text: "靈感來自 90年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。",
        },
        {
          type: "商品備註",
          text: "請於訂單備註填寫您需要的號碼，若未填寫將以空白球衣寄出，客製化商品不接受退換貨。",
        },
      ],
      labels: ["XL", "紫旋風"],
    },
    {
      id: `spec_${nanoid()}`,
      title:
        "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列[紫旋風]",
      price: "3,999",
      stock: 10,
      images: [
        "/product1.png",
        "/product2.png",
        "/product3.png",
        "/product4.png",
      ],
      extraInfos: [
        { type: "商品分類", text: "這邊可以填寫純文字內容。" },
        {
          type: "商品描述",
          text: "靈感來自 90年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。",
        },
        {
          type: "商品備註",
          text: "請於訂單備註填寫您需要的號碼，若未填寫將以空白球衣寄出，客製化商品不接受退換貨。",
        },
      ],
      labels: ["XXL", "紫旋風"],
    },
    {
      id: `spec_${nanoid()}`,
      title:
        "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列[暴風紅]",
      price: "3,999",
      stock: 0,
      images: [
        "/product1.png",
        "/product2.png",
        "/product3.png",
        "/product4.png",
      ],
      extraInfos: [
        { type: "商品分類", text: "這邊可以填寫純文字內容。" },
        {
          type: "商品描述",
          text: "靈感來自 90年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。",
        },
        {
          type: "商品備註",
          text: "請於訂單備註填寫您需要的號碼，若未填寫將以空白球衣寄出，客製化商品不接受退換貨。",
        },
      ],
      labels: ["S", "暴風紅"],
    },
    {
      id: `spec_${nanoid()}`,
      title:
        "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列[耀眼黃]",
      price: "3,999",
      stock: 10,
      images: [
        "/product1.png",
        "/product2.png",
        "/product3.png",
        "/product4.png",
      ],
      extraInfos: [
        { type: "商品分類", text: "這邊可以填寫純文字內容。" },
        {
          type: "商品描述",
          text: "靈感來自 90年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。",
        },
        {
          type: "商品備註",
          text: "請於訂單備註填寫您需要的號碼，若未填寫將以空白球衣寄出，客製化商品不接受退換貨。",
        },
      ],
      labels: ["S", "耀眼黃"],
    },
    {
      id: `spec_${nanoid()}`,
      title:
        "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列[我是第二行選項]",
      price: "3,999",
      stock: 10,
      images: [
        "/product1.png",
        "/product2.png",
        "/product3.png",
        "/product4.png",
      ],
      extraInfos: [
        { type: "商品分類", text: "這邊可以填寫純文字內容。" },
        {
          type: "商品描述",
          text: "靈感來自 90年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。",
        },
        {
          type: "商品備註",
          text: "請於訂單備註填寫您需要的號碼，若未填寫將以空白球衣寄出，客製化商品不接受退換貨。",
        },
      ],
      labels: ["S", "我是第二行選項"],
    },
  ],
};
