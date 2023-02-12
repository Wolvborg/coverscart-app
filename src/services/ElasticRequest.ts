import { ELASTIC_URL } from '@/configs/constants';
import axios from 'axios';

const HEADERS = new Headers();
HEADERS.append('Authorization', 'Basic ' + btoa('elastic' + ':' + 'eqBjF8ydWR66S3Zp0Paw'));
HEADERS.append('Content-Type', 'application/json');

// export class SearchRequest {
//   private searchFields: string[] = [];
//   private searchObject: any = {};

//   constructor() {
//     this.searchFields = [];

//     this.searchObject = {
//       track_total_hits: true,
//       query: {
//         bool: {
//           should: [],
//           filter: [],
//         },
//       },
//       from: 0,
//       size: 30,
//       sort: [],
//       aggs: {},
//     };
//   }

//   havingSearchFields(...fields: string[]) {
//     this.searchFields = fields;
//     return this;
//   }

//   fromCounter(from) {
//     this.searchObject.from = from;
//     return this;
//   }

//   havingSize(size) {
//     this.searchObject.size = size;
//     return this;
//   }

//   // in item.name, space must replaced by underscore('_')
//   withAggregations(...aggs) {
//     aggs.forEach((item) => {
//       let obj = {};
//       obj.terms = {};
//       obj.terms.field = item.field;
//       obj.terms.size = 10000;
//       this.searchObject.aggs[item.name] = obj;
//     });
//     return this;
//   }

//   selectingAggregations(...selectedAgg) {
//     let selectedArray = [];

//     let selectFiltersArray = selectedAgg.filter((agg) => agg.selectedValues.length > 0);

//     if (selectFiltersArray.length > 0) {
//       selectFiltersArray.forEach((agg) => {
//         let obj = {
//           terms: {},
//         };
//         obj.terms[agg.field] = agg.selectedValues;
//         selectedArray.push(obj);
//       });
//     }

//     this.searchObject.query.bool.filter = selectedArray;
//     return this;
//   }

//   sortingBy(sortingField, order) {
//     let arr = [];

//     if (sortingField !== undefined) {
//       let obj = {};
//       obj[sortingField] = {
//         order: order,
//       };
//       arr.push(obj);
//     }

//     this.searchObject.sort = arr;
//     return this;
//   }

//   //This should be called in last 'ALWAYS'
//   givesWithQuery(query) {
//     if (query.trim().length > 0) {
//       this.searchObject.query.bool.should = [
//         {
//           multi_match: {
//             query: query,
//             analyzer: 'standard',
//             fields: this.searchFields,
//           },
//         },
//       ];
//     } else {
//       this.searchObject.query.bool.should = [];
//     }

//     return fetch(ELASTIC_URL, {
//       method: 'POST',
//       headers: HEADERS,
//       body: JSON.stringify(this.searchObject),
//     })
//       .then((response) => response.text())
//       .then((response) => JSON.parse(response));
//   }
// }

// export class ProductRequest {
//   private searchFields: string[] = [];
//   private searchObject: any = {};
//   constructor() {
//     this.searchObject = {
//       query: {
//         bool: {
//           must: {
//             wildcard: {
//               seo_url: '',
//             },
//           },
//         },
//       },
//       post_filter: {
//         term: {
//           seo_url: '',
//         },
//       },
//       from: 0,
//       size: 1,
//       aggs: {},
//     };
//   }

//   withAggregations(...aggs) {
//     aggs.forEach((item) => {
//       let obj = {};
//       obj.terms = {};
//       obj.terms.field = item;
//       obj.terms.size = 10000;
//       this.searchObject.aggs[item] = obj;
//     });
//     return this;
//   }

//   withPostFilter(filter) {
//     this.searchObject.post_filter.term.seo_url = filter;

//     return this;
//   }

//   //This should be called in last 'ALWAYS'
//   givesWithQuery(query) {
//     this.searchObject.query.bool.must.wildcard.seo_url = query;

//     return fetch(ELASTIC_URL, {
//       method: 'POST',
//       headers: HEADERS,
//       body: JSON.stringify(this.searchObject),
//     })
//       .then((response) => response.text())
//       .then((response) => JSON.parse(response));
//   }
// }

// export class SuggestionProductRequest {
//   constructor() {
//     this.searchObject = {
//       query: {
//         bool: {
//           filter: [],
//         },
//       },
//       from: 0,
//       size: 16,
//     };
//   }

//   withSeoUrl(...seoUrls) {
//     this.searchObject.query.bool.filter = [{ terms: { seo_url: seoUrls } }];

//     return fetch(ELASTIC_URL, {
//       method: 'POST',
//       headers: HEADERS,
//       body: JSON.stringify(this.searchObject),
//     })
//       .then((response) => response.text())
//       .then((response) => JSON.parse(response));
//   }
// }

// export class AggregationRequest {
//   constructor() {
//     this.searchObject = {
//       from: 0,
//       size: 0,
//       aggs: {},
//     };
//   }

//   withAggregations(...aggs) {
//     aggs.forEach((item) => {
//       let obj = {};
//       obj.terms = {};
//       obj.terms.field = item;
//       obj.terms.size = 10000;
//       this.searchObject.aggs[item] = obj;
//     });

//     return fetch(ELASTIC_URL, {
//       method: 'POST',
//       headers: HEADERS,
//       body: JSON.stringify(this.searchObject),
//     })
//       .then((response) => response.text())
//       .then((response) => JSON.parse(response));
//   }
// }

export class HomePageProductRequest {
  private searchObject: any = {};

  constructor() {
    this.searchObject = {
      from: 0,
      size: 24,
      sort: [],
    };
  }

  sortingBy(sortingField: string, order: string) {
    const obj: Record<string, any> = {};
    const arr: Record<string, string>[] = [];

    obj[sortingField] = {
      order,
    };

    arr.push(obj);

    this.searchObject.sort = arr;

    return axios({
      method: 'post',
      url: ELASTIC_URL,
      data: this.searchObject,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('elastic' + ':' + 'eqBjF8ydWR66S3Zp0Paw'),
      },
    });
  }
}
