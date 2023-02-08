export class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i"
            }
        } : {};

        this.query.find(keyword);
        return this;
    }

    filter() {
        const queryCopy = { ...this.queryStr };
        const removeFields = ["keyword", "page", "limit"];
        //Category wise filtering
        removeFields.forEach((key) => { delete queryCopy[key] });
        this.query = this.query.find(queryCopy);
        return this;
        //Filter for price and Rating pending
    }

    pagination(resultPerPage) {
        const currPage = parseInt(this.queryStr.page) || 1;
        const skip = resultPerPage * (currPage - 1); /*resultPerPage is constant say 10 products per page, we then multiply it with current page - 1 ex: we're on 2nd page so the result would be 10 * (2-1) which means we skip 10 products and start from the 11th product for the second page*/
        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;
    }
}