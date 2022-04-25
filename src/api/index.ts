import request from '@/utils/request';

const getList = (data) => {
  return request({
    url: '/getList',
    method: 'post',
    data,
  });
};

export default {
  getList,
};
