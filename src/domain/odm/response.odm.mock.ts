import { IResponseCreate, Response, IResponse } from "../entities/response-entity";
import { Document } from "mongoose";

const createResponseMock = async (responseData: IResponseCreate): Promise<Document<IResponse>> => {
  const response = new Response(responseData);
  const document: Document<IResponse> = (await response.save()) as any;
  const responseCopy = document.toObject();
  return responseCopy;
};

const updateResponseMock = async (id: string, responseData: IResponseCreate): Promise<Document<IResponse> | null> => {
  return await Response.findByIdAndUpdate(id, responseData, { new: true, runValidators: true });
};

const getResponseByIdMock = async (id: string): Promise<Document<IResponse> | null> => {
  return await Response.findById(id).populate("Question");
};

export const responseOdmMock = {
  createResponseMock,
  updateResponseMock,
  getResponseByIdMock,
};
