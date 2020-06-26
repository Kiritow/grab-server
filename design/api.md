# Grab Server API

#### GET /api/list 获取包列表

请求

    pageSize=10 分页大小, 默认10
    page=1 返回第几页, 默认第一页

响应

    {
        code: 0,
        message: success,
        data: {
            page: 1,
            pageSize: 10,
            total: 999,
            data: [
                {
                    每个包的信息内容, 字段待定.
                }
            ]
        }
    }
    

#### GET /api/info 获取包详情

请求

    id=1 要获取详情的包ID.
    version=latest 要获取详情的包版本. 默认为最新版本

响应

    {
        code: 0,
        message: success,
        data: {
            每个包的信息内容, 字段待定.
        }
    }

#### GET /api/search 搜索包

请求

    name= 根据包名搜索, 区分大小写
    desc= 根据包简介搜索, 区分大小写
    author= 根据作者搜索, 区分大小写
    license= 根据协议搜索
    page=1 分页 默认1
    pageSize=10 页内容数量, 默认10.

响应

    {
        code: 0，
        message: success,
        data: {
            page: 1,
            pageSize: 10,
            total: 20,
            data: [
                {
                    每个包的信息内容, 字段待定.
                }
            ]
        }
    }


#### POST /api/register 注册

#### POST /api/upload 上传包

#### POST /api/remove 删除包

