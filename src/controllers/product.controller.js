import {
  currentCurrencyRate,
  errorResponse,
  successResponse,
} from "../helpers";
import { product } from "../models";
import { Op } from "sequelize";

export const getProduct = async (req, res) => {
  const id = req.query.id;
  const currency = req.query.currency;
  try {
    const result = await product.findOne({
      where: {
        id: id,
      },
    });
    if (result) {
      result.productViewed = result.productViewed + 1;
      await result.save();
      if (currency) {
        const currentRate = await currentCurrencyRate(currency);
        result.price = result.price * currentRate;
      }
      return successResponse(res, result);
    } else {
      throw new Error("product not found with given id");
    }
  } catch (error) {
    return errorResponse(res, error.message, 404);
  }
};

export const viewedProducts = async (req, res) => {
  const num = parseInt(req.query.number) || 4;
  const currency = req.query.currency;

  let products = await product.findAll({
    where: {
      productViewed: {
        [Op.gte]: 1,
      },
    },
    order: [["productViewed", "DESC"]],
    limit: num,
  });

  if (currency) {
    const currentRate = await currentCurrencyRate(currency);
    products.forEach((item) => {
      item.price = item.price * currentRate;
    });
  }

  return successResponse(res, products);
};
