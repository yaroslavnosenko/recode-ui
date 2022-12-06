export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  bigint: any
  numeric: any
  timestamptz: any
  uuid: any
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>
  _gt?: InputMaybe<Scalars['Int']>
  _gte?: InputMaybe<Scalars['Int']>
  _in?: InputMaybe<Array<Scalars['Int']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Int']>
  _lte?: InputMaybe<Scalars['Int']>
  _neq?: InputMaybe<Scalars['Int']>
  _nin?: InputMaybe<Array<Scalars['Int']>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>
  _gt?: InputMaybe<Scalars['String']>
  _gte?: InputMaybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>
  _in?: InputMaybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>
  _is_null?: InputMaybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>
  _lt?: InputMaybe<Scalars['String']>
  _lte?: InputMaybe<Scalars['String']>
  _neq?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>
  _nin?: InputMaybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'accounts'
  access_token?: Maybe<Scalars['String']>
  expires_at?: Maybe<Scalars['bigint']>
  id: Scalars['uuid']
  id_token?: Maybe<Scalars['String']>
  oauth_token?: Maybe<Scalars['String']>
  oauth_token_secret?: Maybe<Scalars['String']>
  provider: Scalars['String']
  providerAccountId: Scalars['String']
  refresh_token?: Maybe<Scalars['String']>
  refresh_token_expires_in?: Maybe<Scalars['bigint']>
  scope?: Maybe<Scalars['String']>
  session_state?: Maybe<Scalars['String']>
  token_type?: Maybe<Scalars['String']>
  type: Scalars['String']
  /** An object relationship */
  user: Users
  userId: Scalars['uuid']
}

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate'
  aggregate?: Maybe<Accounts_Aggregate_Fields>
  nodes: Array<Accounts>
}

export type Accounts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Accounts_Aggregate_Bool_Exp_Count>
}

export type Accounts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Accounts_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<Accounts_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields'
  avg?: Maybe<Accounts_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Accounts_Max_Fields>
  min?: Maybe<Accounts_Min_Fields>
  stddev?: Maybe<Accounts_Stddev_Fields>
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Fields>
  sum?: Maybe<Accounts_Sum_Fields>
  var_pop?: Maybe<Accounts_Var_Pop_Fields>
  var_samp?: Maybe<Accounts_Var_Samp_Fields>
  variance?: Maybe<Accounts_Variance_Fields>
}

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "accounts" */
export type Accounts_Aggregate_Order_By = {
  avg?: InputMaybe<Accounts_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Accounts_Max_Order_By>
  min?: InputMaybe<Accounts_Min_Order_By>
  stddev?: InputMaybe<Accounts_Stddev_Order_By>
  stddev_pop?: InputMaybe<Accounts_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Accounts_Stddev_Samp_Order_By>
  sum?: InputMaybe<Accounts_Sum_Order_By>
  var_pop?: InputMaybe<Accounts_Var_Pop_Order_By>
  var_samp?: InputMaybe<Accounts_Var_Samp_Order_By>
  variance?: InputMaybe<Accounts_Variance_Order_By>
}

/** input type for inserting array relation for remote table "accounts" */
export type Accounts_Arr_Rel_Insert_Input = {
  data: Array<Accounts_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Accounts_On_Conflict>
}

/** aggregate avg on columns */
export type Accounts_Avg_Fields = {
  __typename?: 'accounts_avg_fields'
  expires_at?: Maybe<Scalars['Float']>
  refresh_token_expires_in?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "accounts" */
export type Accounts_Avg_Order_By = {
  expires_at?: InputMaybe<Order_By>
  refresh_token_expires_in?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>
  _not?: InputMaybe<Accounts_Bool_Exp>
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>
  access_token?: InputMaybe<String_Comparison_Exp>
  expires_at?: InputMaybe<Bigint_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  id_token?: InputMaybe<String_Comparison_Exp>
  oauth_token?: InputMaybe<String_Comparison_Exp>
  oauth_token_secret?: InputMaybe<String_Comparison_Exp>
  provider?: InputMaybe<String_Comparison_Exp>
  providerAccountId?: InputMaybe<String_Comparison_Exp>
  refresh_token?: InputMaybe<String_Comparison_Exp>
  refresh_token_expires_in?: InputMaybe<Bigint_Comparison_Exp>
  scope?: InputMaybe<String_Comparison_Exp>
  session_state?: InputMaybe<String_Comparison_Exp>
  token_type?: InputMaybe<String_Comparison_Exp>
  type?: InputMaybe<String_Comparison_Exp>
  user?: InputMaybe<Users_Bool_Exp>
  userId?: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountsPkey = 'accounts_pkey',
}

/** input type for incrementing numeric columns in table "accounts" */
export type Accounts_Inc_Input = {
  expires_at?: InputMaybe<Scalars['bigint']>
  refresh_token_expires_in?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  access_token?: InputMaybe<Scalars['String']>
  expires_at?: InputMaybe<Scalars['bigint']>
  id?: InputMaybe<Scalars['uuid']>
  id_token?: InputMaybe<Scalars['String']>
  oauth_token?: InputMaybe<Scalars['String']>
  oauth_token_secret?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  providerAccountId?: InputMaybe<Scalars['String']>
  refresh_token?: InputMaybe<Scalars['String']>
  refresh_token_expires_in?: InputMaybe<Scalars['bigint']>
  scope?: InputMaybe<Scalars['String']>
  session_state?: InputMaybe<Scalars['String']>
  token_type?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>
  userId?: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields'
  access_token?: Maybe<Scalars['String']>
  expires_at?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['uuid']>
  id_token?: Maybe<Scalars['String']>
  oauth_token?: Maybe<Scalars['String']>
  oauth_token_secret?: Maybe<Scalars['String']>
  provider?: Maybe<Scalars['String']>
  providerAccountId?: Maybe<Scalars['String']>
  refresh_token?: Maybe<Scalars['String']>
  refresh_token_expires_in?: Maybe<Scalars['bigint']>
  scope?: Maybe<Scalars['String']>
  session_state?: Maybe<Scalars['String']>
  token_type?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "accounts" */
export type Accounts_Max_Order_By = {
  access_token?: InputMaybe<Order_By>
  expires_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  id_token?: InputMaybe<Order_By>
  oauth_token?: InputMaybe<Order_By>
  oauth_token_secret?: InputMaybe<Order_By>
  provider?: InputMaybe<Order_By>
  providerAccountId?: InputMaybe<Order_By>
  refresh_token?: InputMaybe<Order_By>
  refresh_token_expires_in?: InputMaybe<Order_By>
  scope?: InputMaybe<Order_By>
  session_state?: InputMaybe<Order_By>
  token_type?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  userId?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields'
  access_token?: Maybe<Scalars['String']>
  expires_at?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['uuid']>
  id_token?: Maybe<Scalars['String']>
  oauth_token?: Maybe<Scalars['String']>
  oauth_token_secret?: Maybe<Scalars['String']>
  provider?: Maybe<Scalars['String']>
  providerAccountId?: Maybe<Scalars['String']>
  refresh_token?: Maybe<Scalars['String']>
  refresh_token_expires_in?: Maybe<Scalars['bigint']>
  scope?: Maybe<Scalars['String']>
  session_state?: Maybe<Scalars['String']>
  token_type?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "accounts" */
export type Accounts_Min_Order_By = {
  access_token?: InputMaybe<Order_By>
  expires_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  id_token?: InputMaybe<Order_By>
  oauth_token?: InputMaybe<Order_By>
  oauth_token_secret?: InputMaybe<Order_By>
  provider?: InputMaybe<Order_By>
  providerAccountId?: InputMaybe<Order_By>
  refresh_token?: InputMaybe<Order_By>
  refresh_token_expires_in?: InputMaybe<Order_By>
  scope?: InputMaybe<Order_By>
  session_state?: InputMaybe<Order_By>
  token_type?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  userId?: InputMaybe<Order_By>
}

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>
}

/** on_conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint
  update_columns?: Array<Accounts_Update_Column>
  where?: InputMaybe<Accounts_Bool_Exp>
}

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  access_token?: InputMaybe<Order_By>
  expires_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  id_token?: InputMaybe<Order_By>
  oauth_token?: InputMaybe<Order_By>
  oauth_token_secret?: InputMaybe<Order_By>
  provider?: InputMaybe<Order_By>
  providerAccountId?: InputMaybe<Order_By>
  refresh_token?: InputMaybe<Order_By>
  refresh_token_expires_in?: InputMaybe<Order_By>
  scope?: InputMaybe<Order_By>
  session_state?: InputMaybe<Order_By>
  token_type?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  user?: InputMaybe<Users_Order_By>
  userId?: InputMaybe<Order_By>
}

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  OauthToken = 'oauth_token',
  /** column name */
  OauthTokenSecret = 'oauth_token_secret',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  RefreshTokenExpiresIn = 'refresh_token_expires_in',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  access_token?: InputMaybe<Scalars['String']>
  expires_at?: InputMaybe<Scalars['bigint']>
  id?: InputMaybe<Scalars['uuid']>
  id_token?: InputMaybe<Scalars['String']>
  oauth_token?: InputMaybe<Scalars['String']>
  oauth_token_secret?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  providerAccountId?: InputMaybe<Scalars['String']>
  refresh_token?: InputMaybe<Scalars['String']>
  refresh_token_expires_in?: InputMaybe<Scalars['bigint']>
  scope?: InputMaybe<Scalars['String']>
  session_state?: InputMaybe<Scalars['String']>
  token_type?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['uuid']>
}

/** aggregate stddev on columns */
export type Accounts_Stddev_Fields = {
  __typename?: 'accounts_stddev_fields'
  expires_at?: Maybe<Scalars['Float']>
  refresh_token_expires_in?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "accounts" */
export type Accounts_Stddev_Order_By = {
  expires_at?: InputMaybe<Order_By>
  refresh_token_expires_in?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Accounts_Stddev_Pop_Fields = {
  __typename?: 'accounts_stddev_pop_fields'
  expires_at?: Maybe<Scalars['Float']>
  refresh_token_expires_in?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "accounts" */
export type Accounts_Stddev_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>
  refresh_token_expires_in?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Accounts_Stddev_Samp_Fields = {
  __typename?: 'accounts_stddev_samp_fields'
  expires_at?: Maybe<Scalars['Float']>
  refresh_token_expires_in?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "accounts" */
export type Accounts_Stddev_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>
  refresh_token_expires_in?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "accounts" */
export type Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Accounts_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Accounts_Stream_Cursor_Value_Input = {
  access_token?: InputMaybe<Scalars['String']>
  expires_at?: InputMaybe<Scalars['bigint']>
  id?: InputMaybe<Scalars['uuid']>
  id_token?: InputMaybe<Scalars['String']>
  oauth_token?: InputMaybe<Scalars['String']>
  oauth_token_secret?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  providerAccountId?: InputMaybe<Scalars['String']>
  refresh_token?: InputMaybe<Scalars['String']>
  refresh_token_expires_in?: InputMaybe<Scalars['bigint']>
  scope?: InputMaybe<Scalars['String']>
  session_state?: InputMaybe<Scalars['String']>
  token_type?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['uuid']>
}

/** aggregate sum on columns */
export type Accounts_Sum_Fields = {
  __typename?: 'accounts_sum_fields'
  expires_at?: Maybe<Scalars['bigint']>
  refresh_token_expires_in?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "accounts" */
export type Accounts_Sum_Order_By = {
  expires_at?: InputMaybe<Order_By>
  refresh_token_expires_in?: InputMaybe<Order_By>
}

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  OauthToken = 'oauth_token',
  /** column name */
  OauthTokenSecret = 'oauth_token_secret',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  RefreshTokenExpiresIn = 'refresh_token_expires_in',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId',
}

export type Accounts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Accounts_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Accounts_Set_Input>
  where: Accounts_Bool_Exp
}

/** aggregate var_pop on columns */
export type Accounts_Var_Pop_Fields = {
  __typename?: 'accounts_var_pop_fields'
  expires_at?: Maybe<Scalars['Float']>
  refresh_token_expires_in?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "accounts" */
export type Accounts_Var_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>
  refresh_token_expires_in?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Accounts_Var_Samp_Fields = {
  __typename?: 'accounts_var_samp_fields'
  expires_at?: Maybe<Scalars['Float']>
  refresh_token_expires_in?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "accounts" */
export type Accounts_Var_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>
  refresh_token_expires_in?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Accounts_Variance_Fields = {
  __typename?: 'accounts_variance_fields'
  expires_at?: Maybe<Scalars['Float']>
  refresh_token_expires_in?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "accounts" */
export type Accounts_Variance_Order_By = {
  expires_at?: InputMaybe<Order_By>
  refresh_token_expires_in?: InputMaybe<Order_By>
}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>
  _gt?: InputMaybe<Scalars['bigint']>
  _gte?: InputMaybe<Scalars['bigint']>
  _in?: InputMaybe<Array<Scalars['bigint']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['bigint']>
  _lte?: InputMaybe<Scalars['bigint']>
  _neq?: InputMaybe<Scalars['bigint']>
  _nin?: InputMaybe<Array<Scalars['bigint']>>
}

/** columns and relationships of "categories" */
export type Category = {
  __typename?: 'category'
  id: Scalars['uuid']
  menuId: Scalars['uuid']
  name: Scalars['String']
  /** An array relationship */
  products: Array<Product>
  /** An aggregate relationship */
  products_aggregate: Product_Aggregate
  sortOrder: Scalars['Int']
}

/** columns and relationships of "categories" */
export type CategoryProductsArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Product_Order_By>>
  where?: InputMaybe<Product_Bool_Exp>
}

/** columns and relationships of "categories" */
export type CategoryProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Product_Order_By>>
  where?: InputMaybe<Product_Bool_Exp>
}

/** aggregated selection of "categories" */
export type Category_Aggregate = {
  __typename?: 'category_aggregate'
  aggregate?: Maybe<Category_Aggregate_Fields>
  nodes: Array<Category>
}

export type Category_Aggregate_Bool_Exp = {
  count?: InputMaybe<Category_Aggregate_Bool_Exp_Count>
}

export type Category_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Category_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<Category_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "categories" */
export type Category_Aggregate_Fields = {
  __typename?: 'category_aggregate_fields'
  avg?: Maybe<Category_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Category_Max_Fields>
  min?: Maybe<Category_Min_Fields>
  stddev?: Maybe<Category_Stddev_Fields>
  stddev_pop?: Maybe<Category_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Category_Stddev_Samp_Fields>
  sum?: Maybe<Category_Sum_Fields>
  var_pop?: Maybe<Category_Var_Pop_Fields>
  var_samp?: Maybe<Category_Var_Samp_Fields>
  variance?: Maybe<Category_Variance_Fields>
}

/** aggregate fields of "categories" */
export type Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Category_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "categories" */
export type Category_Aggregate_Order_By = {
  avg?: InputMaybe<Category_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Category_Max_Order_By>
  min?: InputMaybe<Category_Min_Order_By>
  stddev?: InputMaybe<Category_Stddev_Order_By>
  stddev_pop?: InputMaybe<Category_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Category_Stddev_Samp_Order_By>
  sum?: InputMaybe<Category_Sum_Order_By>
  var_pop?: InputMaybe<Category_Var_Pop_Order_By>
  var_samp?: InputMaybe<Category_Var_Samp_Order_By>
  variance?: InputMaybe<Category_Variance_Order_By>
}

/** input type for inserting array relation for remote table "categories" */
export type Category_Arr_Rel_Insert_Input = {
  data: Array<Category_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Category_On_Conflict>
}

/** aggregate avg on columns */
export type Category_Avg_Fields = {
  __typename?: 'category_avg_fields'
  sortOrder?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "categories" */
export type Category_Avg_Order_By = {
  sortOrder?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Category_Bool_Exp = {
  _and?: InputMaybe<Array<Category_Bool_Exp>>
  _not?: InputMaybe<Category_Bool_Exp>
  _or?: InputMaybe<Array<Category_Bool_Exp>>
  id?: InputMaybe<Uuid_Comparison_Exp>
  menuId?: InputMaybe<Uuid_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  products?: InputMaybe<Product_Bool_Exp>
  products_aggregate?: InputMaybe<Product_Aggregate_Bool_Exp>
  sortOrder?: InputMaybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "categories" */
export enum Category_Constraint {
  /** unique or primary key constraint on columns "id" */
  CategoriesPkey = 'categories_pkey',
}

/** input type for incrementing numeric columns in table "categories" */
export type Category_Inc_Input = {
  sortOrder?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "categories" */
export type Category_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>
  menuId?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  products?: InputMaybe<Product_Arr_Rel_Insert_Input>
  sortOrder?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export type Category_Max_Fields = {
  __typename?: 'category_max_fields'
  id?: Maybe<Scalars['uuid']>
  menuId?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  sortOrder?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "categories" */
export type Category_Max_Order_By = {
  id?: InputMaybe<Order_By>
  menuId?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  sortOrder?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Category_Min_Fields = {
  __typename?: 'category_min_fields'
  id?: Maybe<Scalars['uuid']>
  menuId?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  sortOrder?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "categories" */
export type Category_Min_Order_By = {
  id?: InputMaybe<Order_By>
  menuId?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  sortOrder?: InputMaybe<Order_By>
}

/** response of any mutation on the table "categories" */
export type Category_Mutation_Response = {
  __typename?: 'category_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Category>
}

/** on_conflict condition type for table "categories" */
export type Category_On_Conflict = {
  constraint: Category_Constraint
  update_columns?: Array<Category_Update_Column>
  where?: InputMaybe<Category_Bool_Exp>
}

/** Ordering options when selecting data from "categories". */
export type Category_Order_By = {
  id?: InputMaybe<Order_By>
  menuId?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  products_aggregate?: InputMaybe<Product_Aggregate_Order_By>
  sortOrder?: InputMaybe<Order_By>
}

/** primary key columns input for table: categories */
export type Category_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "categories" */
export enum Category_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MenuId = 'menuId',
  /** column name */
  Name = 'name',
  /** column name */
  SortOrder = 'sortOrder',
}

/** input type for updating data in table "categories" */
export type Category_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>
  menuId?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  sortOrder?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Category_Stddev_Fields = {
  __typename?: 'category_stddev_fields'
  sortOrder?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "categories" */
export type Category_Stddev_Order_By = {
  sortOrder?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Category_Stddev_Pop_Fields = {
  __typename?: 'category_stddev_pop_fields'
  sortOrder?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "categories" */
export type Category_Stddev_Pop_Order_By = {
  sortOrder?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Category_Stddev_Samp_Fields = {
  __typename?: 'category_stddev_samp_fields'
  sortOrder?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "categories" */
export type Category_Stddev_Samp_Order_By = {
  sortOrder?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "category" */
export type Category_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Category_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Category_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>
  menuId?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  sortOrder?: InputMaybe<Scalars['Int']>
}

/** aggregate sum on columns */
export type Category_Sum_Fields = {
  __typename?: 'category_sum_fields'
  sortOrder?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "categories" */
export type Category_Sum_Order_By = {
  sortOrder?: InputMaybe<Order_By>
}

/** update columns of table "categories" */
export enum Category_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MenuId = 'menuId',
  /** column name */
  Name = 'name',
  /** column name */
  SortOrder = 'sortOrder',
}

export type Category_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Category_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Category_Set_Input>
  where: Category_Bool_Exp
}

/** aggregate var_pop on columns */
export type Category_Var_Pop_Fields = {
  __typename?: 'category_var_pop_fields'
  sortOrder?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "categories" */
export type Category_Var_Pop_Order_By = {
  sortOrder?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Category_Var_Samp_Fields = {
  __typename?: 'category_var_samp_fields'
  sortOrder?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "categories" */
export type Category_Var_Samp_Order_By = {
  sortOrder?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Category_Variance_Fields = {
  __typename?: 'category_variance_fields'
  sortOrder?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "categories" */
export type Category_Variance_Order_By = {
  sortOrder?: InputMaybe<Order_By>
}

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** columns and relationships of "customers" */
export type Customer = {
  __typename?: 'customer'
  id: Scalars['uuid']
  /** An array relationship */
  orders: Array<Order>
  /** An aggregate relationship */
  orders_aggregate: Order_Aggregate
}

/** columns and relationships of "customers" */
export type CustomerOrdersArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Order_Order_By>>
  where?: InputMaybe<Order_Bool_Exp>
}

/** columns and relationships of "customers" */
export type CustomerOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Order_Order_By>>
  where?: InputMaybe<Order_Bool_Exp>
}

/** aggregated selection of "customers" */
export type Customer_Aggregate = {
  __typename?: 'customer_aggregate'
  aggregate?: Maybe<Customer_Aggregate_Fields>
  nodes: Array<Customer>
}

/** aggregate fields of "customers" */
export type Customer_Aggregate_Fields = {
  __typename?: 'customer_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Customer_Max_Fields>
  min?: Maybe<Customer_Min_Fields>
}

/** aggregate fields of "customers" */
export type Customer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customer_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customer_Bool_Exp = {
  _and?: InputMaybe<Array<Customer_Bool_Exp>>
  _not?: InputMaybe<Customer_Bool_Exp>
  _or?: InputMaybe<Array<Customer_Bool_Exp>>
  id?: InputMaybe<Uuid_Comparison_Exp>
  orders?: InputMaybe<Order_Bool_Exp>
  orders_aggregate?: InputMaybe<Order_Aggregate_Bool_Exp>
}

/** unique or primary key constraints on table "customers" */
export enum Customer_Constraint {
  /** unique or primary key constraint on columns "id" */
  CustomersPkey = 'customers_pkey',
}

/** input type for inserting data into table "customers" */
export type Customer_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>
  orders?: InputMaybe<Order_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Customer_Max_Fields = {
  __typename?: 'customer_max_fields'
  id?: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export type Customer_Min_Fields = {
  __typename?: 'customer_min_fields'
  id?: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "customers" */
export type Customer_Mutation_Response = {
  __typename?: 'customer_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Customer>
}

/** on_conflict condition type for table "customers" */
export type Customer_On_Conflict = {
  constraint: Customer_Constraint
  update_columns?: Array<Customer_Update_Column>
  where?: InputMaybe<Customer_Bool_Exp>
}

/** Ordering options when selecting data from "customers". */
export type Customer_Order_By = {
  id?: InputMaybe<Order_By>
  orders_aggregate?: InputMaybe<Order_Aggregate_Order_By>
}

/** primary key columns input for table: customers */
export type Customer_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "customers" */
export enum Customer_Select_Column {
  /** column name */
  Id = 'id',
}

/** input type for updating data in table "customers" */
export type Customer_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>
}

/** Streaming cursor of the table "customer" */
export type Customer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customer_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Customer_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>
}

/** update columns of table "customers" */
export enum Customer_Update_Column {
  /** column name */
  Id = 'id',
}

export type Customer_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Customer_Set_Input>
  where: Customer_Bool_Exp
}

/** columns and relationships of "employees" */
export type Employee = {
  __typename?: 'employee'
  id: Scalars['uuid']
  /** An object relationship */
  merchant: Merchant
  merchantId: Scalars['uuid']
  name: Scalars['String']
  pin: Scalars['String']
  username: Scalars['String']
}

/** aggregated selection of "employees" */
export type Employee_Aggregate = {
  __typename?: 'employee_aggregate'
  aggregate?: Maybe<Employee_Aggregate_Fields>
  nodes: Array<Employee>
}

export type Employee_Aggregate_Bool_Exp = {
  count?: InputMaybe<Employee_Aggregate_Bool_Exp_Count>
}

export type Employee_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Employee_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<Employee_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "employees" */
export type Employee_Aggregate_Fields = {
  __typename?: 'employee_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Employee_Max_Fields>
  min?: Maybe<Employee_Min_Fields>
}

/** aggregate fields of "employees" */
export type Employee_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Employee_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "employees" */
export type Employee_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Employee_Max_Order_By>
  min?: InputMaybe<Employee_Min_Order_By>
}

/** input type for inserting array relation for remote table "employees" */
export type Employee_Arr_Rel_Insert_Input = {
  data: Array<Employee_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Employee_On_Conflict>
}

/** Boolean expression to filter rows from the table "employees". All fields are combined with a logical 'AND'. */
export type Employee_Bool_Exp = {
  _and?: InputMaybe<Array<Employee_Bool_Exp>>
  _not?: InputMaybe<Employee_Bool_Exp>
  _or?: InputMaybe<Array<Employee_Bool_Exp>>
  id?: InputMaybe<Uuid_Comparison_Exp>
  merchant?: InputMaybe<Merchant_Bool_Exp>
  merchantId?: InputMaybe<Uuid_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  pin?: InputMaybe<String_Comparison_Exp>
  username?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "employees" */
export enum Employee_Constraint {
  /** unique or primary key constraint on columns "id" */
  EmployeesPkey = 'employees_pkey',
  /** unique or primary key constraint on columns "username" */
  EmployeesUsernameKey = 'employees_username_key',
}

/** input type for inserting data into table "employees" */
export type Employee_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>
  merchant?: InputMaybe<Merchant_Obj_Rel_Insert_Input>
  merchantId?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  pin?: InputMaybe<Scalars['String']>
  username?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Employee_Max_Fields = {
  __typename?: 'employee_max_fields'
  id?: Maybe<Scalars['uuid']>
  merchantId?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  pin?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "employees" */
export type Employee_Max_Order_By = {
  id?: InputMaybe<Order_By>
  merchantId?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  pin?: InputMaybe<Order_By>
  username?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Employee_Min_Fields = {
  __typename?: 'employee_min_fields'
  id?: Maybe<Scalars['uuid']>
  merchantId?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  pin?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "employees" */
export type Employee_Min_Order_By = {
  id?: InputMaybe<Order_By>
  merchantId?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  pin?: InputMaybe<Order_By>
  username?: InputMaybe<Order_By>
}

/** response of any mutation on the table "employees" */
export type Employee_Mutation_Response = {
  __typename?: 'employee_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Employee>
}

/** on_conflict condition type for table "employees" */
export type Employee_On_Conflict = {
  constraint: Employee_Constraint
  update_columns?: Array<Employee_Update_Column>
  where?: InputMaybe<Employee_Bool_Exp>
}

/** Ordering options when selecting data from "employees". */
export type Employee_Order_By = {
  id?: InputMaybe<Order_By>
  merchant?: InputMaybe<Merchant_Order_By>
  merchantId?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  pin?: InputMaybe<Order_By>
  username?: InputMaybe<Order_By>
}

/** primary key columns input for table: employees */
export type Employee_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "employees" */
export enum Employee_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MerchantId = 'merchantId',
  /** column name */
  Name = 'name',
  /** column name */
  Pin = 'pin',
  /** column name */
  Username = 'username',
}

/** input type for updating data in table "employees" */
export type Employee_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>
  merchantId?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  pin?: InputMaybe<Scalars['String']>
  username?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "employee" */
export type Employee_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Employee_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Employee_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>
  merchantId?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  pin?: InputMaybe<Scalars['String']>
  username?: InputMaybe<Scalars['String']>
}

/** update columns of table "employees" */
export enum Employee_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MerchantId = 'merchantId',
  /** column name */
  Name = 'name',
  /** column name */
  Pin = 'pin',
  /** column name */
  Username = 'username',
}

export type Employee_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Employee_Set_Input>
  where: Employee_Bool_Exp
}

/** columns and relationships of "menus" */
export type Menu = {
  __typename?: 'menu'
  /** An array relationship */
  categories: Array<Category>
  /** An aggregate relationship */
  categories_aggregate: Category_Aggregate
  id: Scalars['uuid']
  merchantId: Scalars['uuid']
}

/** columns and relationships of "menus" */
export type MenuCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Category_Order_By>>
  where?: InputMaybe<Category_Bool_Exp>
}

/** columns and relationships of "menus" */
export type MenuCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Category_Order_By>>
  where?: InputMaybe<Category_Bool_Exp>
}

/** aggregated selection of "menus" */
export type Menu_Aggregate = {
  __typename?: 'menu_aggregate'
  aggregate?: Maybe<Menu_Aggregate_Fields>
  nodes: Array<Menu>
}

/** aggregate fields of "menus" */
export type Menu_Aggregate_Fields = {
  __typename?: 'menu_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Menu_Max_Fields>
  min?: Maybe<Menu_Min_Fields>
}

/** aggregate fields of "menus" */
export type Menu_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Menu_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "menus". All fields are combined with a logical 'AND'. */
export type Menu_Bool_Exp = {
  _and?: InputMaybe<Array<Menu_Bool_Exp>>
  _not?: InputMaybe<Menu_Bool_Exp>
  _or?: InputMaybe<Array<Menu_Bool_Exp>>
  categories?: InputMaybe<Category_Bool_Exp>
  categories_aggregate?: InputMaybe<Category_Aggregate_Bool_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  merchantId?: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "menus" */
export enum Menu_Constraint {
  /** unique or primary key constraint on columns "merchantId" */
  MenusMerchantIdKey = 'menus_merchantId_key',
  /** unique or primary key constraint on columns "id" */
  MenusPkey = 'menus_pkey',
}

/** input type for inserting data into table "menus" */
export type Menu_Insert_Input = {
  categories?: InputMaybe<Category_Arr_Rel_Insert_Input>
  id?: InputMaybe<Scalars['uuid']>
  merchantId?: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Menu_Max_Fields = {
  __typename?: 'menu_max_fields'
  id?: Maybe<Scalars['uuid']>
  merchantId?: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export type Menu_Min_Fields = {
  __typename?: 'menu_min_fields'
  id?: Maybe<Scalars['uuid']>
  merchantId?: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "menus" */
export type Menu_Mutation_Response = {
  __typename?: 'menu_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Menu>
}

/** input type for inserting object relation for remote table "menus" */
export type Menu_Obj_Rel_Insert_Input = {
  data: Menu_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Menu_On_Conflict>
}

/** on_conflict condition type for table "menus" */
export type Menu_On_Conflict = {
  constraint: Menu_Constraint
  update_columns?: Array<Menu_Update_Column>
  where?: InputMaybe<Menu_Bool_Exp>
}

/** Ordering options when selecting data from "menus". */
export type Menu_Order_By = {
  categories_aggregate?: InputMaybe<Category_Aggregate_Order_By>
  id?: InputMaybe<Order_By>
  merchantId?: InputMaybe<Order_By>
}

/** primary key columns input for table: menus */
export type Menu_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "menus" */
export enum Menu_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MerchantId = 'merchantId',
}

/** input type for updating data in table "menus" */
export type Menu_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>
  merchantId?: InputMaybe<Scalars['uuid']>
}

/** Streaming cursor of the table "menu" */
export type Menu_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Menu_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Menu_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>
  merchantId?: InputMaybe<Scalars['uuid']>
}

/** update columns of table "menus" */
export enum Menu_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MerchantId = 'merchantId',
}

export type Menu_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Menu_Set_Input>
  where: Menu_Bool_Exp
}

/** columns and relationships of "merchants" */
export type Merchant = {
  __typename?: 'merchant'
  address?: Maybe<Scalars['String']>
  currency: Scalars['String']
  /** An array relationship */
  employees: Array<Employee>
  /** An aggregate relationship */
  employees_aggregate: Employee_Aggregate
  id: Scalars['uuid']
  lang: Scalars['String']
  /** An object relationship */
  menu?: Maybe<Menu>
  name: Scalars['String']
  /** An array relationship */
  orders: Array<Order>
  /** An aggregate relationship */
  orders_aggregate: Order_Aggregate
  phone?: Maybe<Scalars['String']>
  /** An array relationship */
  placements: Array<Placement>
  /** An aggregate relationship */
  placements_aggregate: Placement_Aggregate
  slug: Scalars['String']
  userId: Scalars['uuid']
  wifi?: Maybe<Scalars['String']>
}

/** columns and relationships of "merchants" */
export type MerchantEmployeesArgs = {
  distinct_on?: InputMaybe<Array<Employee_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Employee_Order_By>>
  where?: InputMaybe<Employee_Bool_Exp>
}

/** columns and relationships of "merchants" */
export type MerchantEmployees_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Employee_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Employee_Order_By>>
  where?: InputMaybe<Employee_Bool_Exp>
}

/** columns and relationships of "merchants" */
export type MerchantOrdersArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Order_Order_By>>
  where?: InputMaybe<Order_Bool_Exp>
}

/** columns and relationships of "merchants" */
export type MerchantOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Order_Order_By>>
  where?: InputMaybe<Order_Bool_Exp>
}

/** columns and relationships of "merchants" */
export type MerchantPlacementsArgs = {
  distinct_on?: InputMaybe<Array<Placement_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Placement_Order_By>>
  where?: InputMaybe<Placement_Bool_Exp>
}

/** columns and relationships of "merchants" */
export type MerchantPlacements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Placement_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Placement_Order_By>>
  where?: InputMaybe<Placement_Bool_Exp>
}

/** aggregated selection of "merchants" */
export type Merchant_Aggregate = {
  __typename?: 'merchant_aggregate'
  aggregate?: Maybe<Merchant_Aggregate_Fields>
  nodes: Array<Merchant>
}

/** aggregate fields of "merchants" */
export type Merchant_Aggregate_Fields = {
  __typename?: 'merchant_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Merchant_Max_Fields>
  min?: Maybe<Merchant_Min_Fields>
}

/** aggregate fields of "merchants" */
export type Merchant_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Merchant_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "merchants". All fields are combined with a logical 'AND'. */
export type Merchant_Bool_Exp = {
  _and?: InputMaybe<Array<Merchant_Bool_Exp>>
  _not?: InputMaybe<Merchant_Bool_Exp>
  _or?: InputMaybe<Array<Merchant_Bool_Exp>>
  address?: InputMaybe<String_Comparison_Exp>
  currency?: InputMaybe<String_Comparison_Exp>
  employees?: InputMaybe<Employee_Bool_Exp>
  employees_aggregate?: InputMaybe<Employee_Aggregate_Bool_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  lang?: InputMaybe<String_Comparison_Exp>
  menu?: InputMaybe<Menu_Bool_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  orders?: InputMaybe<Order_Bool_Exp>
  orders_aggregate?: InputMaybe<Order_Aggregate_Bool_Exp>
  phone?: InputMaybe<String_Comparison_Exp>
  placements?: InputMaybe<Placement_Bool_Exp>
  placements_aggregate?: InputMaybe<Placement_Aggregate_Bool_Exp>
  slug?: InputMaybe<String_Comparison_Exp>
  userId?: InputMaybe<Uuid_Comparison_Exp>
  wifi?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "merchants" */
export enum Merchant_Constraint {
  /** unique or primary key constraint on columns "id" */
  MerchantsPkey = 'merchants_pkey',
  /** unique or primary key constraint on columns "slug" */
  MerchantsSlugKey = 'merchants_slug_key',
  /** unique or primary key constraint on columns "userId" */
  MerchantsUserIdKey = 'merchants_userId_key',
}

/** input type for inserting data into table "merchants" */
export type Merchant_Insert_Input = {
  address?: InputMaybe<Scalars['String']>
  currency?: InputMaybe<Scalars['String']>
  employees?: InputMaybe<Employee_Arr_Rel_Insert_Input>
  id?: InputMaybe<Scalars['uuid']>
  lang?: InputMaybe<Scalars['String']>
  menu?: InputMaybe<Menu_Obj_Rel_Insert_Input>
  name?: InputMaybe<Scalars['String']>
  orders?: InputMaybe<Order_Arr_Rel_Insert_Input>
  phone?: InputMaybe<Scalars['String']>
  placements?: InputMaybe<Placement_Arr_Rel_Insert_Input>
  slug?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['uuid']>
  wifi?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Merchant_Max_Fields = {
  __typename?: 'merchant_max_fields'
  address?: Maybe<Scalars['String']>
  currency?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  lang?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['uuid']>
  wifi?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Merchant_Min_Fields = {
  __typename?: 'merchant_min_fields'
  address?: Maybe<Scalars['String']>
  currency?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  lang?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['uuid']>
  wifi?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "merchants" */
export type Merchant_Mutation_Response = {
  __typename?: 'merchant_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Merchant>
}

/** input type for inserting object relation for remote table "merchants" */
export type Merchant_Obj_Rel_Insert_Input = {
  data: Merchant_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Merchant_On_Conflict>
}

/** on_conflict condition type for table "merchants" */
export type Merchant_On_Conflict = {
  constraint: Merchant_Constraint
  update_columns?: Array<Merchant_Update_Column>
  where?: InputMaybe<Merchant_Bool_Exp>
}

/** Ordering options when selecting data from "merchants". */
export type Merchant_Order_By = {
  address?: InputMaybe<Order_By>
  currency?: InputMaybe<Order_By>
  employees_aggregate?: InputMaybe<Employee_Aggregate_Order_By>
  id?: InputMaybe<Order_By>
  lang?: InputMaybe<Order_By>
  menu?: InputMaybe<Menu_Order_By>
  name?: InputMaybe<Order_By>
  orders_aggregate?: InputMaybe<Order_Aggregate_Order_By>
  phone?: InputMaybe<Order_By>
  placements_aggregate?: InputMaybe<Placement_Aggregate_Order_By>
  slug?: InputMaybe<Order_By>
  userId?: InputMaybe<Order_By>
  wifi?: InputMaybe<Order_By>
}

/** primary key columns input for table: merchants */
export type Merchant_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "merchants" */
export enum Merchant_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Currency = 'currency',
  /** column name */
  Id = 'id',
  /** column name */
  Lang = 'lang',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  Slug = 'slug',
  /** column name */
  UserId = 'userId',
  /** column name */
  Wifi = 'wifi',
}

/** input type for updating data in table "merchants" */
export type Merchant_Set_Input = {
  address?: InputMaybe<Scalars['String']>
  currency?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  lang?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  slug?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['uuid']>
  wifi?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "merchant" */
export type Merchant_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Merchant_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Merchant_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>
  currency?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  lang?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  slug?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['uuid']>
  wifi?: InputMaybe<Scalars['String']>
}

/** update columns of table "merchants" */
export enum Merchant_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Currency = 'currency',
  /** column name */
  Id = 'id',
  /** column name */
  Lang = 'lang',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  Slug = 'slug',
  /** column name */
  UserId = 'userId',
  /** column name */
  Wifi = 'wifi',
}

export type Merchant_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Merchant_Set_Input>
  where: Merchant_Bool_Exp
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>
  /** delete data from the table: "categories" */
  delete_category?: Maybe<Category_Mutation_Response>
  /** delete single row from the table: "categories" */
  delete_category_by_pk?: Maybe<Category>
  /** delete data from the table: "customers" */
  delete_customer?: Maybe<Customer_Mutation_Response>
  /** delete single row from the table: "customers" */
  delete_customer_by_pk?: Maybe<Customer>
  /** delete data from the table: "employees" */
  delete_employee?: Maybe<Employee_Mutation_Response>
  /** delete single row from the table: "employees" */
  delete_employee_by_pk?: Maybe<Employee>
  /** delete data from the table: "menus" */
  delete_menu?: Maybe<Menu_Mutation_Response>
  /** delete single row from the table: "menus" */
  delete_menu_by_pk?: Maybe<Menu>
  /** delete data from the table: "merchants" */
  delete_merchant?: Maybe<Merchant_Mutation_Response>
  /** delete single row from the table: "merchants" */
  delete_merchant_by_pk?: Maybe<Merchant>
  /** delete data from the table: "orders" */
  delete_order?: Maybe<Order_Mutation_Response>
  /** delete single row from the table: "orders" */
  delete_order_by_pk?: Maybe<Order>
  /** delete data from the table: "order_rows" */
  delete_order_row?: Maybe<Order_Row_Mutation_Response>
  /** delete single row from the table: "order_rows" */
  delete_order_row_by_pk?: Maybe<Order_Row>
  /** delete data from the table: "placements" */
  delete_placement?: Maybe<Placement_Mutation_Response>
  /** delete single row from the table: "placements" */
  delete_placement_by_pk?: Maybe<Placement>
  /** delete data from the table: "products" */
  delete_product?: Maybe<Product_Mutation_Response>
  /** delete single row from the table: "products" */
  delete_product_by_pk?: Maybe<Product>
  /** delete data from the table: "qr_codes" */
  delete_qr_code?: Maybe<Qr_Code_Mutation_Response>
  /** delete single row from the table: "qr_codes" */
  delete_qr_code_by_pk?: Maybe<Qr_Code>
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<Sessions>
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>
  /** delete data from the table: "verification_tokens" */
  delete_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>
  /** delete single row from the table: "verification_tokens" */
  delete_verification_tokens_by_pk?: Maybe<Verification_Tokens>
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>
  /** insert data into the table: "categories" */
  insert_category?: Maybe<Category_Mutation_Response>
  /** insert a single row into the table: "categories" */
  insert_category_one?: Maybe<Category>
  /** insert data into the table: "customers" */
  insert_customer?: Maybe<Customer_Mutation_Response>
  /** insert a single row into the table: "customers" */
  insert_customer_one?: Maybe<Customer>
  /** insert data into the table: "employees" */
  insert_employee?: Maybe<Employee_Mutation_Response>
  /** insert a single row into the table: "employees" */
  insert_employee_one?: Maybe<Employee>
  /** insert data into the table: "menus" */
  insert_menu?: Maybe<Menu_Mutation_Response>
  /** insert a single row into the table: "menus" */
  insert_menu_one?: Maybe<Menu>
  /** insert data into the table: "merchants" */
  insert_merchant?: Maybe<Merchant_Mutation_Response>
  /** insert a single row into the table: "merchants" */
  insert_merchant_one?: Maybe<Merchant>
  /** insert data into the table: "orders" */
  insert_order?: Maybe<Order_Mutation_Response>
  /** insert a single row into the table: "orders" */
  insert_order_one?: Maybe<Order>
  /** insert data into the table: "order_rows" */
  insert_order_row?: Maybe<Order_Row_Mutation_Response>
  /** insert a single row into the table: "order_rows" */
  insert_order_row_one?: Maybe<Order_Row>
  /** insert data into the table: "placements" */
  insert_placement?: Maybe<Placement_Mutation_Response>
  /** insert a single row into the table: "placements" */
  insert_placement_one?: Maybe<Placement>
  /** insert data into the table: "products" */
  insert_product?: Maybe<Product_Mutation_Response>
  /** insert a single row into the table: "products" */
  insert_product_one?: Maybe<Product>
  /** insert data into the table: "qr_codes" */
  insert_qr_code?: Maybe<Qr_Code_Mutation_Response>
  /** insert a single row into the table: "qr_codes" */
  insert_qr_code_one?: Maybe<Qr_Code>
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<Sessions>
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>
  /** insert data into the table: "verification_tokens" */
  insert_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>
  /** insert a single row into the table: "verification_tokens" */
  insert_verification_tokens_one?: Maybe<Verification_Tokens>
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>
  /** update multiples rows of table: "accounts" */
  update_accounts_many?: Maybe<Array<Maybe<Accounts_Mutation_Response>>>
  /** update data of the table: "categories" */
  update_category?: Maybe<Category_Mutation_Response>
  /** update single row of the table: "categories" */
  update_category_by_pk?: Maybe<Category>
  /** update multiples rows of table: "categories" */
  update_category_many?: Maybe<Array<Maybe<Category_Mutation_Response>>>
  /** update data of the table: "customers" */
  update_customer?: Maybe<Customer_Mutation_Response>
  /** update single row of the table: "customers" */
  update_customer_by_pk?: Maybe<Customer>
  /** update multiples rows of table: "customers" */
  update_customer_many?: Maybe<Array<Maybe<Customer_Mutation_Response>>>
  /** update data of the table: "employees" */
  update_employee?: Maybe<Employee_Mutation_Response>
  /** update single row of the table: "employees" */
  update_employee_by_pk?: Maybe<Employee>
  /** update multiples rows of table: "employees" */
  update_employee_many?: Maybe<Array<Maybe<Employee_Mutation_Response>>>
  /** update data of the table: "menus" */
  update_menu?: Maybe<Menu_Mutation_Response>
  /** update single row of the table: "menus" */
  update_menu_by_pk?: Maybe<Menu>
  /** update multiples rows of table: "menus" */
  update_menu_many?: Maybe<Array<Maybe<Menu_Mutation_Response>>>
  /** update data of the table: "merchants" */
  update_merchant?: Maybe<Merchant_Mutation_Response>
  /** update single row of the table: "merchants" */
  update_merchant_by_pk?: Maybe<Merchant>
  /** update multiples rows of table: "merchants" */
  update_merchant_many?: Maybe<Array<Maybe<Merchant_Mutation_Response>>>
  /** update data of the table: "orders" */
  update_order?: Maybe<Order_Mutation_Response>
  /** update single row of the table: "orders" */
  update_order_by_pk?: Maybe<Order>
  /** update multiples rows of table: "orders" */
  update_order_many?: Maybe<Array<Maybe<Order_Mutation_Response>>>
  /** update data of the table: "order_rows" */
  update_order_row?: Maybe<Order_Row_Mutation_Response>
  /** update single row of the table: "order_rows" */
  update_order_row_by_pk?: Maybe<Order_Row>
  /** update multiples rows of table: "order_rows" */
  update_order_row_many?: Maybe<Array<Maybe<Order_Row_Mutation_Response>>>
  /** update data of the table: "placements" */
  update_placement?: Maybe<Placement_Mutation_Response>
  /** update single row of the table: "placements" */
  update_placement_by_pk?: Maybe<Placement>
  /** update multiples rows of table: "placements" */
  update_placement_many?: Maybe<Array<Maybe<Placement_Mutation_Response>>>
  /** update data of the table: "products" */
  update_product?: Maybe<Product_Mutation_Response>
  /** update single row of the table: "products" */
  update_product_by_pk?: Maybe<Product>
  /** update multiples rows of table: "products" */
  update_product_many?: Maybe<Array<Maybe<Product_Mutation_Response>>>
  /** update data of the table: "qr_codes" */
  update_qr_code?: Maybe<Qr_Code_Mutation_Response>
  /** update single row of the table: "qr_codes" */
  update_qr_code_by_pk?: Maybe<Qr_Code>
  /** update multiples rows of table: "qr_codes" */
  update_qr_code_many?: Maybe<Array<Maybe<Qr_Code_Mutation_Response>>>
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>
  /** update multiples rows of table: "sessions" */
  update_sessions_many?: Maybe<Array<Maybe<Sessions_Mutation_Response>>>
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>
  /** update data of the table: "verification_tokens" */
  update_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>
  /** update single row of the table: "verification_tokens" */
  update_verification_tokens_by_pk?: Maybe<Verification_Tokens>
  /** update multiples rows of table: "verification_tokens" */
  update_verification_tokens_many?: Maybe<
    Array<Maybe<Verification_Tokens_Mutation_Response>>
  >
}

/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_CategoryArgs = {
  where: Category_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Category_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_CustomerArgs = {
  where: Customer_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Customer_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_EmployeeArgs = {
  where: Employee_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Employee_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_MenuArgs = {
  where: Menu_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Menu_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_MerchantArgs = {
  where: Merchant_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Merchant_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_OrderArgs = {
  where: Order_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Order_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Order_RowArgs = {
  where: Order_Row_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Order_Row_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_PlacementArgs = {
  where: Placement_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Placement_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_ProductArgs = {
  where: Product_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Product_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Qr_CodeArgs = {
  where: Qr_Code_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Qr_Code_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Sessions_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Verification_TokensArgs = {
  where: Verification_Tokens_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Verification_Tokens_By_PkArgs = {
  token: Scalars['String']
}

/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>
  on_conflict?: InputMaybe<Accounts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input
  on_conflict?: InputMaybe<Accounts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_CategoryArgs = {
  objects: Array<Category_Insert_Input>
  on_conflict?: InputMaybe<Category_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Category_OneArgs = {
  object: Category_Insert_Input
  on_conflict?: InputMaybe<Category_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_CustomerArgs = {
  objects: Array<Customer_Insert_Input>
  on_conflict?: InputMaybe<Customer_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Customer_OneArgs = {
  object: Customer_Insert_Input
  on_conflict?: InputMaybe<Customer_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_EmployeeArgs = {
  objects: Array<Employee_Insert_Input>
  on_conflict?: InputMaybe<Employee_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Employee_OneArgs = {
  object: Employee_Insert_Input
  on_conflict?: InputMaybe<Employee_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_MenuArgs = {
  objects: Array<Menu_Insert_Input>
  on_conflict?: InputMaybe<Menu_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Menu_OneArgs = {
  object: Menu_Insert_Input
  on_conflict?: InputMaybe<Menu_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_MerchantArgs = {
  objects: Array<Merchant_Insert_Input>
  on_conflict?: InputMaybe<Merchant_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Merchant_OneArgs = {
  object: Merchant_Insert_Input
  on_conflict?: InputMaybe<Merchant_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_OrderArgs = {
  objects: Array<Order_Insert_Input>
  on_conflict?: InputMaybe<Order_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Order_OneArgs = {
  object: Order_Insert_Input
  on_conflict?: InputMaybe<Order_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Order_RowArgs = {
  objects: Array<Order_Row_Insert_Input>
  on_conflict?: InputMaybe<Order_Row_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Order_Row_OneArgs = {
  object: Order_Row_Insert_Input
  on_conflict?: InputMaybe<Order_Row_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_PlacementArgs = {
  objects: Array<Placement_Insert_Input>
  on_conflict?: InputMaybe<Placement_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Placement_OneArgs = {
  object: Placement_Insert_Input
  on_conflict?: InputMaybe<Placement_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_ProductArgs = {
  objects: Array<Product_Insert_Input>
  on_conflict?: InputMaybe<Product_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Product_OneArgs = {
  object: Product_Insert_Input
  on_conflict?: InputMaybe<Product_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Qr_CodeArgs = {
  objects: Array<Qr_Code_Insert_Input>
  on_conflict?: InputMaybe<Qr_Code_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Qr_Code_OneArgs = {
  object: Qr_Code_Insert_Input
  on_conflict?: InputMaybe<Qr_Code_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>
  on_conflict?: InputMaybe<Sessions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Sessions_OneArgs = {
  object: Sessions_Insert_Input
  on_conflict?: InputMaybe<Sessions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Verification_TokensArgs = {
  objects: Array<Verification_Tokens_Insert_Input>
  on_conflict?: InputMaybe<Verification_Tokens_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Verification_Tokens_OneArgs = {
  object: Verification_Tokens_Insert_Input
  on_conflict?: InputMaybe<Verification_Tokens_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>
  _set?: InputMaybe<Accounts_Set_Input>
  where: Accounts_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>
  _set?: InputMaybe<Accounts_Set_Input>
  pk_columns: Accounts_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Accounts_ManyArgs = {
  updates: Array<Accounts_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_CategoryArgs = {
  _inc?: InputMaybe<Category_Inc_Input>
  _set?: InputMaybe<Category_Set_Input>
  where: Category_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Category_By_PkArgs = {
  _inc?: InputMaybe<Category_Inc_Input>
  _set?: InputMaybe<Category_Set_Input>
  pk_columns: Category_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Category_ManyArgs = {
  updates: Array<Category_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_CustomerArgs = {
  _set?: InputMaybe<Customer_Set_Input>
  where: Customer_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Customer_By_PkArgs = {
  _set?: InputMaybe<Customer_Set_Input>
  pk_columns: Customer_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Customer_ManyArgs = {
  updates: Array<Customer_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_EmployeeArgs = {
  _set?: InputMaybe<Employee_Set_Input>
  where: Employee_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Employee_By_PkArgs = {
  _set?: InputMaybe<Employee_Set_Input>
  pk_columns: Employee_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Employee_ManyArgs = {
  updates: Array<Employee_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_MenuArgs = {
  _set?: InputMaybe<Menu_Set_Input>
  where: Menu_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Menu_By_PkArgs = {
  _set?: InputMaybe<Menu_Set_Input>
  pk_columns: Menu_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Menu_ManyArgs = {
  updates: Array<Menu_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_MerchantArgs = {
  _set?: InputMaybe<Merchant_Set_Input>
  where: Merchant_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Merchant_By_PkArgs = {
  _set?: InputMaybe<Merchant_Set_Input>
  pk_columns: Merchant_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Merchant_ManyArgs = {
  updates: Array<Merchant_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_OrderArgs = {
  _set?: InputMaybe<Order_Set_Input>
  where: Order_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Order_By_PkArgs = {
  _set?: InputMaybe<Order_Set_Input>
  pk_columns: Order_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Order_ManyArgs = {
  updates: Array<Order_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Order_RowArgs = {
  _inc?: InputMaybe<Order_Row_Inc_Input>
  _set?: InputMaybe<Order_Row_Set_Input>
  where: Order_Row_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Order_Row_By_PkArgs = {
  _inc?: InputMaybe<Order_Row_Inc_Input>
  _set?: InputMaybe<Order_Row_Set_Input>
  pk_columns: Order_Row_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Order_Row_ManyArgs = {
  updates: Array<Order_Row_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_PlacementArgs = {
  _set?: InputMaybe<Placement_Set_Input>
  where: Placement_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Placement_By_PkArgs = {
  _set?: InputMaybe<Placement_Set_Input>
  pk_columns: Placement_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Placement_ManyArgs = {
  updates: Array<Placement_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_ProductArgs = {
  _inc?: InputMaybe<Product_Inc_Input>
  _set?: InputMaybe<Product_Set_Input>
  where: Product_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Product_By_PkArgs = {
  _inc?: InputMaybe<Product_Inc_Input>
  _set?: InputMaybe<Product_Set_Input>
  pk_columns: Product_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Product_ManyArgs = {
  updates: Array<Product_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Qr_CodeArgs = {
  _set?: InputMaybe<Qr_Code_Set_Input>
  where: Qr_Code_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Qr_Code_By_PkArgs = {
  _set?: InputMaybe<Qr_Code_Set_Input>
  pk_columns: Qr_Code_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Qr_Code_ManyArgs = {
  updates: Array<Qr_Code_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
  _set?: InputMaybe<Sessions_Set_Input>
  where: Sessions_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Sessions_By_PkArgs = {
  _set?: InputMaybe<Sessions_Set_Input>
  pk_columns: Sessions_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Sessions_ManyArgs = {
  updates: Array<Sessions_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>
  pk_columns: Users_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Verification_TokensArgs = {
  _set?: InputMaybe<Verification_Tokens_Set_Input>
  where: Verification_Tokens_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Verification_Tokens_By_PkArgs = {
  _set?: InputMaybe<Verification_Tokens_Set_Input>
  pk_columns: Verification_Tokens_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Verification_Tokens_ManyArgs = {
  updates: Array<Verification_Tokens_Updates>
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>
  _gt?: InputMaybe<Scalars['numeric']>
  _gte?: InputMaybe<Scalars['numeric']>
  _in?: InputMaybe<Array<Scalars['numeric']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['numeric']>
  _lte?: InputMaybe<Scalars['numeric']>
  _neq?: InputMaybe<Scalars['numeric']>
  _nin?: InputMaybe<Array<Scalars['numeric']>>
}

/** columns and relationships of "orders" */
export type Order = {
  __typename?: 'order'
  customerId: Scalars['uuid']
  id: Scalars['uuid']
  merchantId: Scalars['uuid']
  placementId: Scalars['uuid']
  /** An array relationship */
  rows: Array<Order_Row>
  /** An aggregate relationship */
  rows_aggregate: Order_Row_Aggregate
  status: Scalars['String']
}

/** columns and relationships of "orders" */
export type OrderRowsArgs = {
  distinct_on?: InputMaybe<Array<Order_Row_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Order_Row_Order_By>>
  where?: InputMaybe<Order_Row_Bool_Exp>
}

/** columns and relationships of "orders" */
export type OrderRows_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Row_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Order_Row_Order_By>>
  where?: InputMaybe<Order_Row_Bool_Exp>
}

/** aggregated selection of "orders" */
export type Order_Aggregate = {
  __typename?: 'order_aggregate'
  aggregate?: Maybe<Order_Aggregate_Fields>
  nodes: Array<Order>
}

export type Order_Aggregate_Bool_Exp = {
  count?: InputMaybe<Order_Aggregate_Bool_Exp_Count>
}

export type Order_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Order_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<Order_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "orders" */
export type Order_Aggregate_Fields = {
  __typename?: 'order_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Order_Max_Fields>
  min?: Maybe<Order_Min_Fields>
}

/** aggregate fields of "orders" */
export type Order_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "orders" */
export type Order_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Order_Max_Order_By>
  min?: InputMaybe<Order_Min_Order_By>
}

/** input type for inserting array relation for remote table "orders" */
export type Order_Arr_Rel_Insert_Input = {
  data: Array<Order_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Order_On_Conflict>
}

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Order_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Bool_Exp>>
  _not?: InputMaybe<Order_Bool_Exp>
  _or?: InputMaybe<Array<Order_Bool_Exp>>
  customerId?: InputMaybe<Uuid_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  merchantId?: InputMaybe<Uuid_Comparison_Exp>
  placementId?: InputMaybe<Uuid_Comparison_Exp>
  rows?: InputMaybe<Order_Row_Bool_Exp>
  rows_aggregate?: InputMaybe<Order_Row_Aggregate_Bool_Exp>
  status?: InputMaybe<String_Comparison_Exp>
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** unique or primary key constraints on table "orders" */
export enum Order_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersPkey = 'orders_pkey',
}

/** input type for inserting data into table "orders" */
export type Order_Insert_Input = {
  customerId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  merchantId?: InputMaybe<Scalars['uuid']>
  placementId?: InputMaybe<Scalars['uuid']>
  rows?: InputMaybe<Order_Row_Arr_Rel_Insert_Input>
  status?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Order_Max_Fields = {
  __typename?: 'order_max_fields'
  customerId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  merchantId?: Maybe<Scalars['uuid']>
  placementId?: Maybe<Scalars['uuid']>
  status?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "orders" */
export type Order_Max_Order_By = {
  customerId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  merchantId?: InputMaybe<Order_By>
  placementId?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Order_Min_Fields = {
  __typename?: 'order_min_fields'
  customerId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  merchantId?: Maybe<Scalars['uuid']>
  placementId?: Maybe<Scalars['uuid']>
  status?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "orders" */
export type Order_Min_Order_By = {
  customerId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  merchantId?: InputMaybe<Order_By>
  placementId?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** response of any mutation on the table "orders" */
export type Order_Mutation_Response = {
  __typename?: 'order_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Order>
}

/** on_conflict condition type for table "orders" */
export type Order_On_Conflict = {
  constraint: Order_Constraint
  update_columns?: Array<Order_Update_Column>
  where?: InputMaybe<Order_Bool_Exp>
}

/** Ordering options when selecting data from "orders". */
export type Order_Order_By = {
  customerId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  merchantId?: InputMaybe<Order_By>
  placementId?: InputMaybe<Order_By>
  rows_aggregate?: InputMaybe<Order_Row_Aggregate_Order_By>
  status?: InputMaybe<Order_By>
}

/** primary key columns input for table: orders */
export type Order_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** columns and relationships of "order_rows" */
export type Order_Row = {
  __typename?: 'order_row'
  amount: Scalars['Int']
  id: Scalars['uuid']
  orderId: Scalars['uuid']
  productId: Scalars['uuid']
}

/** aggregated selection of "order_rows" */
export type Order_Row_Aggregate = {
  __typename?: 'order_row_aggregate'
  aggregate?: Maybe<Order_Row_Aggregate_Fields>
  nodes: Array<Order_Row>
}

export type Order_Row_Aggregate_Bool_Exp = {
  count?: InputMaybe<Order_Row_Aggregate_Bool_Exp_Count>
}

export type Order_Row_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Order_Row_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<Order_Row_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "order_rows" */
export type Order_Row_Aggregate_Fields = {
  __typename?: 'order_row_aggregate_fields'
  avg?: Maybe<Order_Row_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Order_Row_Max_Fields>
  min?: Maybe<Order_Row_Min_Fields>
  stddev?: Maybe<Order_Row_Stddev_Fields>
  stddev_pop?: Maybe<Order_Row_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Order_Row_Stddev_Samp_Fields>
  sum?: Maybe<Order_Row_Sum_Fields>
  var_pop?: Maybe<Order_Row_Var_Pop_Fields>
  var_samp?: Maybe<Order_Row_Var_Samp_Fields>
  variance?: Maybe<Order_Row_Variance_Fields>
}

/** aggregate fields of "order_rows" */
export type Order_Row_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Row_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "order_rows" */
export type Order_Row_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Row_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Order_Row_Max_Order_By>
  min?: InputMaybe<Order_Row_Min_Order_By>
  stddev?: InputMaybe<Order_Row_Stddev_Order_By>
  stddev_pop?: InputMaybe<Order_Row_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Order_Row_Stddev_Samp_Order_By>
  sum?: InputMaybe<Order_Row_Sum_Order_By>
  var_pop?: InputMaybe<Order_Row_Var_Pop_Order_By>
  var_samp?: InputMaybe<Order_Row_Var_Samp_Order_By>
  variance?: InputMaybe<Order_Row_Variance_Order_By>
}

/** input type for inserting array relation for remote table "order_rows" */
export type Order_Row_Arr_Rel_Insert_Input = {
  data: Array<Order_Row_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Order_Row_On_Conflict>
}

/** aggregate avg on columns */
export type Order_Row_Avg_Fields = {
  __typename?: 'order_row_avg_fields'
  amount?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "order_rows" */
export type Order_Row_Avg_Order_By = {
  amount?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "order_rows". All fields are combined with a logical 'AND'. */
export type Order_Row_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Row_Bool_Exp>>
  _not?: InputMaybe<Order_Row_Bool_Exp>
  _or?: InputMaybe<Array<Order_Row_Bool_Exp>>
  amount?: InputMaybe<Int_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  orderId?: InputMaybe<Uuid_Comparison_Exp>
  productId?: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "order_rows" */
export enum Order_Row_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderRowsPkey = 'order_rows_pkey',
}

/** input type for incrementing numeric columns in table "order_rows" */
export type Order_Row_Inc_Input = {
  amount?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "order_rows" */
export type Order_Row_Insert_Input = {
  amount?: InputMaybe<Scalars['Int']>
  id?: InputMaybe<Scalars['uuid']>
  orderId?: InputMaybe<Scalars['uuid']>
  productId?: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Order_Row_Max_Fields = {
  __typename?: 'order_row_max_fields'
  amount?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['uuid']>
  orderId?: Maybe<Scalars['uuid']>
  productId?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "order_rows" */
export type Order_Row_Max_Order_By = {
  amount?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  orderId?: InputMaybe<Order_By>
  productId?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Order_Row_Min_Fields = {
  __typename?: 'order_row_min_fields'
  amount?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['uuid']>
  orderId?: Maybe<Scalars['uuid']>
  productId?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "order_rows" */
export type Order_Row_Min_Order_By = {
  amount?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  orderId?: InputMaybe<Order_By>
  productId?: InputMaybe<Order_By>
}

/** response of any mutation on the table "order_rows" */
export type Order_Row_Mutation_Response = {
  __typename?: 'order_row_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Order_Row>
}

/** on_conflict condition type for table "order_rows" */
export type Order_Row_On_Conflict = {
  constraint: Order_Row_Constraint
  update_columns?: Array<Order_Row_Update_Column>
  where?: InputMaybe<Order_Row_Bool_Exp>
}

/** Ordering options when selecting data from "order_rows". */
export type Order_Row_Order_By = {
  amount?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  orderId?: InputMaybe<Order_By>
  productId?: InputMaybe<Order_By>
}

/** primary key columns input for table: order_rows */
export type Order_Row_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "order_rows" */
export enum Order_Row_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'orderId',
  /** column name */
  ProductId = 'productId',
}

/** input type for updating data in table "order_rows" */
export type Order_Row_Set_Input = {
  amount?: InputMaybe<Scalars['Int']>
  id?: InputMaybe<Scalars['uuid']>
  orderId?: InputMaybe<Scalars['uuid']>
  productId?: InputMaybe<Scalars['uuid']>
}

/** aggregate stddev on columns */
export type Order_Row_Stddev_Fields = {
  __typename?: 'order_row_stddev_fields'
  amount?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "order_rows" */
export type Order_Row_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Order_Row_Stddev_Pop_Fields = {
  __typename?: 'order_row_stddev_pop_fields'
  amount?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "order_rows" */
export type Order_Row_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Order_Row_Stddev_Samp_Fields = {
  __typename?: 'order_row_stddev_samp_fields'
  amount?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "order_rows" */
export type Order_Row_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "order_row" */
export type Order_Row_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Row_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Order_Row_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['Int']>
  id?: InputMaybe<Scalars['uuid']>
  orderId?: InputMaybe<Scalars['uuid']>
  productId?: InputMaybe<Scalars['uuid']>
}

/** aggregate sum on columns */
export type Order_Row_Sum_Fields = {
  __typename?: 'order_row_sum_fields'
  amount?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "order_rows" */
export type Order_Row_Sum_Order_By = {
  amount?: InputMaybe<Order_By>
}

/** update columns of table "order_rows" */
export enum Order_Row_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'orderId',
  /** column name */
  ProductId = 'productId',
}

export type Order_Row_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Order_Row_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Row_Set_Input>
  where: Order_Row_Bool_Exp
}

/** aggregate var_pop on columns */
export type Order_Row_Var_Pop_Fields = {
  __typename?: 'order_row_var_pop_fields'
  amount?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "order_rows" */
export type Order_Row_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Order_Row_Var_Samp_Fields = {
  __typename?: 'order_row_var_samp_fields'
  amount?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "order_rows" */
export type Order_Row_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Order_Row_Variance_Fields = {
  __typename?: 'order_row_variance_fields'
  amount?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "order_rows" */
export type Order_Row_Variance_Order_By = {
  amount?: InputMaybe<Order_By>
}

/** select columns of table "orders" */
export enum Order_Select_Column {
  /** column name */
  CustomerId = 'customerId',
  /** column name */
  Id = 'id',
  /** column name */
  MerchantId = 'merchantId',
  /** column name */
  PlacementId = 'placementId',
  /** column name */
  Status = 'status',
}

/** input type for updating data in table "orders" */
export type Order_Set_Input = {
  customerId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  merchantId?: InputMaybe<Scalars['uuid']>
  placementId?: InputMaybe<Scalars['uuid']>
  status?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "order" */
export type Order_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Order_Stream_Cursor_Value_Input = {
  customerId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  merchantId?: InputMaybe<Scalars['uuid']>
  placementId?: InputMaybe<Scalars['uuid']>
  status?: InputMaybe<Scalars['String']>
}

/** update columns of table "orders" */
export enum Order_Update_Column {
  /** column name */
  CustomerId = 'customerId',
  /** column name */
  Id = 'id',
  /** column name */
  MerchantId = 'merchantId',
  /** column name */
  PlacementId = 'placementId',
  /** column name */
  Status = 'status',
}

export type Order_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Set_Input>
  where: Order_Bool_Exp
}

/** columns and relationships of "placements" */
export type Placement = {
  __typename?: 'placement'
  id: Scalars['uuid']
  /** An object relationship */
  merchant: Merchant
  merchantId: Scalars['uuid']
  name: Scalars['String']
}

/** aggregated selection of "placements" */
export type Placement_Aggregate = {
  __typename?: 'placement_aggregate'
  aggregate?: Maybe<Placement_Aggregate_Fields>
  nodes: Array<Placement>
}

export type Placement_Aggregate_Bool_Exp = {
  count?: InputMaybe<Placement_Aggregate_Bool_Exp_Count>
}

export type Placement_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Placement_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<Placement_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "placements" */
export type Placement_Aggregate_Fields = {
  __typename?: 'placement_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Placement_Max_Fields>
  min?: Maybe<Placement_Min_Fields>
}

/** aggregate fields of "placements" */
export type Placement_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Placement_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "placements" */
export type Placement_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Placement_Max_Order_By>
  min?: InputMaybe<Placement_Min_Order_By>
}

/** input type for inserting array relation for remote table "placements" */
export type Placement_Arr_Rel_Insert_Input = {
  data: Array<Placement_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Placement_On_Conflict>
}

/** Boolean expression to filter rows from the table "placements". All fields are combined with a logical 'AND'. */
export type Placement_Bool_Exp = {
  _and?: InputMaybe<Array<Placement_Bool_Exp>>
  _not?: InputMaybe<Placement_Bool_Exp>
  _or?: InputMaybe<Array<Placement_Bool_Exp>>
  id?: InputMaybe<Uuid_Comparison_Exp>
  merchant?: InputMaybe<Merchant_Bool_Exp>
  merchantId?: InputMaybe<Uuid_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "placements" */
export enum Placement_Constraint {
  /** unique or primary key constraint on columns "merchantId", "name" */
  PlacementsNameMerchantIdKey = 'placements_name_merchantId_key',
  /** unique or primary key constraint on columns "id" */
  PlacementsPkey = 'placements_pkey',
}

/** input type for inserting data into table "placements" */
export type Placement_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>
  merchant?: InputMaybe<Merchant_Obj_Rel_Insert_Input>
  merchantId?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Placement_Max_Fields = {
  __typename?: 'placement_max_fields'
  id?: Maybe<Scalars['uuid']>
  merchantId?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "placements" */
export type Placement_Max_Order_By = {
  id?: InputMaybe<Order_By>
  merchantId?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Placement_Min_Fields = {
  __typename?: 'placement_min_fields'
  id?: Maybe<Scalars['uuid']>
  merchantId?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "placements" */
export type Placement_Min_Order_By = {
  id?: InputMaybe<Order_By>
  merchantId?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
}

/** response of any mutation on the table "placements" */
export type Placement_Mutation_Response = {
  __typename?: 'placement_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Placement>
}

/** input type for inserting object relation for remote table "placements" */
export type Placement_Obj_Rel_Insert_Input = {
  data: Placement_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Placement_On_Conflict>
}

/** on_conflict condition type for table "placements" */
export type Placement_On_Conflict = {
  constraint: Placement_Constraint
  update_columns?: Array<Placement_Update_Column>
  where?: InputMaybe<Placement_Bool_Exp>
}

/** Ordering options when selecting data from "placements". */
export type Placement_Order_By = {
  id?: InputMaybe<Order_By>
  merchant?: InputMaybe<Merchant_Order_By>
  merchantId?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
}

/** primary key columns input for table: placements */
export type Placement_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "placements" */
export enum Placement_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MerchantId = 'merchantId',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "placements" */
export type Placement_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>
  merchantId?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "placement" */
export type Placement_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Placement_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Placement_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>
  merchantId?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
}

/** update columns of table "placements" */
export enum Placement_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MerchantId = 'merchantId',
  /** column name */
  Name = 'name',
}

export type Placement_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Placement_Set_Input>
  where: Placement_Bool_Exp
}

/** columns and relationships of "products" */
export type Product = {
  __typename?: 'product'
  categoryId: Scalars['uuid']
  description?: Maybe<Scalars['String']>
  id: Scalars['uuid']
  name: Scalars['String']
  price: Scalars['numeric']
}

/** aggregated selection of "products" */
export type Product_Aggregate = {
  __typename?: 'product_aggregate'
  aggregate?: Maybe<Product_Aggregate_Fields>
  nodes: Array<Product>
}

export type Product_Aggregate_Bool_Exp = {
  count?: InputMaybe<Product_Aggregate_Bool_Exp_Count>
}

export type Product_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Product_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<Product_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "products" */
export type Product_Aggregate_Fields = {
  __typename?: 'product_aggregate_fields'
  avg?: Maybe<Product_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Product_Max_Fields>
  min?: Maybe<Product_Min_Fields>
  stddev?: Maybe<Product_Stddev_Fields>
  stddev_pop?: Maybe<Product_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Product_Stddev_Samp_Fields>
  sum?: Maybe<Product_Sum_Fields>
  var_pop?: Maybe<Product_Var_Pop_Fields>
  var_samp?: Maybe<Product_Var_Samp_Fields>
  variance?: Maybe<Product_Variance_Fields>
}

/** aggregate fields of "products" */
export type Product_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "products" */
export type Product_Aggregate_Order_By = {
  avg?: InputMaybe<Product_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Product_Max_Order_By>
  min?: InputMaybe<Product_Min_Order_By>
  stddev?: InputMaybe<Product_Stddev_Order_By>
  stddev_pop?: InputMaybe<Product_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Product_Stddev_Samp_Order_By>
  sum?: InputMaybe<Product_Sum_Order_By>
  var_pop?: InputMaybe<Product_Var_Pop_Order_By>
  var_samp?: InputMaybe<Product_Var_Samp_Order_By>
  variance?: InputMaybe<Product_Variance_Order_By>
}

/** input type for inserting array relation for remote table "products" */
export type Product_Arr_Rel_Insert_Input = {
  data: Array<Product_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Product_On_Conflict>
}

/** aggregate avg on columns */
export type Product_Avg_Fields = {
  __typename?: 'product_avg_fields'
  price?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "products" */
export type Product_Avg_Order_By = {
  price?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Product_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Bool_Exp>>
  _not?: InputMaybe<Product_Bool_Exp>
  _or?: InputMaybe<Array<Product_Bool_Exp>>
  categoryId?: InputMaybe<Uuid_Comparison_Exp>
  description?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  price?: InputMaybe<Numeric_Comparison_Exp>
}

/** unique or primary key constraints on table "products" */
export enum Product_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductsPkey = 'products_pkey',
}

/** input type for incrementing numeric columns in table "products" */
export type Product_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']>
}

/** input type for inserting data into table "products" */
export type Product_Insert_Input = {
  categoryId?: InputMaybe<Scalars['uuid']>
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  price?: InputMaybe<Scalars['numeric']>
}

/** aggregate max on columns */
export type Product_Max_Fields = {
  __typename?: 'product_max_fields'
  categoryId?: Maybe<Scalars['uuid']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['numeric']>
}

/** order by max() on columns of table "products" */
export type Product_Max_Order_By = {
  categoryId?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Product_Min_Fields = {
  __typename?: 'product_min_fields'
  categoryId?: Maybe<Scalars['uuid']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['numeric']>
}

/** order by min() on columns of table "products" */
export type Product_Min_Order_By = {
  categoryId?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** response of any mutation on the table "products" */
export type Product_Mutation_Response = {
  __typename?: 'product_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Product>
}

/** on_conflict condition type for table "products" */
export type Product_On_Conflict = {
  constraint: Product_Constraint
  update_columns?: Array<Product_Update_Column>
  where?: InputMaybe<Product_Bool_Exp>
}

/** Ordering options when selecting data from "products". */
export type Product_Order_By = {
  categoryId?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** primary key columns input for table: products */
export type Product_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "products" */
export enum Product_Select_Column {
  /** column name */
  CategoryId = 'categoryId',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
}

/** input type for updating data in table "products" */
export type Product_Set_Input = {
  categoryId?: InputMaybe<Scalars['uuid']>
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  price?: InputMaybe<Scalars['numeric']>
}

/** aggregate stddev on columns */
export type Product_Stddev_Fields = {
  __typename?: 'product_stddev_fields'
  price?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "products" */
export type Product_Stddev_Order_By = {
  price?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Product_Stddev_Pop_Fields = {
  __typename?: 'product_stddev_pop_fields'
  price?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "products" */
export type Product_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Product_Stddev_Samp_Fields = {
  __typename?: 'product_stddev_samp_fields'
  price?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "products" */
export type Product_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "product" */
export type Product_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Product_Stream_Cursor_Value_Input = {
  categoryId?: InputMaybe<Scalars['uuid']>
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  price?: InputMaybe<Scalars['numeric']>
}

/** aggregate sum on columns */
export type Product_Sum_Fields = {
  __typename?: 'product_sum_fields'
  price?: Maybe<Scalars['numeric']>
}

/** order by sum() on columns of table "products" */
export type Product_Sum_Order_By = {
  price?: InputMaybe<Order_By>
}

/** update columns of table "products" */
export enum Product_Update_Column {
  /** column name */
  CategoryId = 'categoryId',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
}

export type Product_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Product_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Set_Input>
  where: Product_Bool_Exp
}

/** aggregate var_pop on columns */
export type Product_Var_Pop_Fields = {
  __typename?: 'product_var_pop_fields'
  price?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "products" */
export type Product_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Product_Var_Samp_Fields = {
  __typename?: 'product_var_samp_fields'
  price?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "products" */
export type Product_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Product_Variance_Fields = {
  __typename?: 'product_variance_fields'
  price?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "products" */
export type Product_Variance_Order_By = {
  price?: InputMaybe<Order_By>
}

/** columns and relationships of "qr_codes" */
export type Qr_Code = {
  __typename?: 'qr_code'
  id: Scalars['uuid']
  /** An object relationship */
  placement: Placement
  placementId: Scalars['uuid']
}

/** aggregated selection of "qr_codes" */
export type Qr_Code_Aggregate = {
  __typename?: 'qr_code_aggregate'
  aggregate?: Maybe<Qr_Code_Aggregate_Fields>
  nodes: Array<Qr_Code>
}

/** aggregate fields of "qr_codes" */
export type Qr_Code_Aggregate_Fields = {
  __typename?: 'qr_code_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Qr_Code_Max_Fields>
  min?: Maybe<Qr_Code_Min_Fields>
}

/** aggregate fields of "qr_codes" */
export type Qr_Code_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Qr_Code_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "qr_codes". All fields are combined with a logical 'AND'. */
export type Qr_Code_Bool_Exp = {
  _and?: InputMaybe<Array<Qr_Code_Bool_Exp>>
  _not?: InputMaybe<Qr_Code_Bool_Exp>
  _or?: InputMaybe<Array<Qr_Code_Bool_Exp>>
  id?: InputMaybe<Uuid_Comparison_Exp>
  placement?: InputMaybe<Placement_Bool_Exp>
  placementId?: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "qr_codes" */
export enum Qr_Code_Constraint {
  /** unique or primary key constraint on columns "id" */
  QrCodesPkey = 'qr_codes_pkey',
  /** unique or primary key constraint on columns "placementId" */
  QrCodesPlacementIdKey = 'qr_codes_placementId_key',
}

/** input type for inserting data into table "qr_codes" */
export type Qr_Code_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>
  placement?: InputMaybe<Placement_Obj_Rel_Insert_Input>
  placementId?: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Qr_Code_Max_Fields = {
  __typename?: 'qr_code_max_fields'
  id?: Maybe<Scalars['uuid']>
  placementId?: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export type Qr_Code_Min_Fields = {
  __typename?: 'qr_code_min_fields'
  id?: Maybe<Scalars['uuid']>
  placementId?: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "qr_codes" */
export type Qr_Code_Mutation_Response = {
  __typename?: 'qr_code_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Qr_Code>
}

/** on_conflict condition type for table "qr_codes" */
export type Qr_Code_On_Conflict = {
  constraint: Qr_Code_Constraint
  update_columns?: Array<Qr_Code_Update_Column>
  where?: InputMaybe<Qr_Code_Bool_Exp>
}

/** Ordering options when selecting data from "qr_codes". */
export type Qr_Code_Order_By = {
  id?: InputMaybe<Order_By>
  placement?: InputMaybe<Placement_Order_By>
  placementId?: InputMaybe<Order_By>
}

/** primary key columns input for table: qr_codes */
export type Qr_Code_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "qr_codes" */
export enum Qr_Code_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PlacementId = 'placementId',
}

/** input type for updating data in table "qr_codes" */
export type Qr_Code_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>
  placementId?: InputMaybe<Scalars['uuid']>
}

/** Streaming cursor of the table "qr_code" */
export type Qr_Code_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Qr_Code_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Qr_Code_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>
  placementId?: InputMaybe<Scalars['uuid']>
}

/** update columns of table "qr_codes" */
export enum Qr_Code_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PlacementId = 'placementId',
}

export type Qr_Code_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Qr_Code_Set_Input>
  where: Qr_Code_Bool_Exp
}

export type Query_Root = {
  __typename?: 'query_root'
  /** An array relationship */
  accounts: Array<Accounts>
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>
  /** fetch data from the table: "categories" */
  category: Array<Category>
  /** fetch aggregated fields from the table: "categories" */
  category_aggregate: Category_Aggregate
  /** fetch data from the table: "categories" using primary key columns */
  category_by_pk?: Maybe<Category>
  /** fetch data from the table: "customers" */
  customer: Array<Customer>
  /** fetch aggregated fields from the table: "customers" */
  customer_aggregate: Customer_Aggregate
  /** fetch data from the table: "customers" using primary key columns */
  customer_by_pk?: Maybe<Customer>
  /** fetch data from the table: "employees" */
  employee: Array<Employee>
  /** fetch aggregated fields from the table: "employees" */
  employee_aggregate: Employee_Aggregate
  /** fetch data from the table: "employees" using primary key columns */
  employee_by_pk?: Maybe<Employee>
  /** fetch data from the table: "menus" */
  menu: Array<Menu>
  /** fetch aggregated fields from the table: "menus" */
  menu_aggregate: Menu_Aggregate
  /** fetch data from the table: "menus" using primary key columns */
  menu_by_pk?: Maybe<Menu>
  /** fetch data from the table: "merchants" */
  merchant: Array<Merchant>
  /** fetch aggregated fields from the table: "merchants" */
  merchant_aggregate: Merchant_Aggregate
  /** fetch data from the table: "merchants" using primary key columns */
  merchant_by_pk?: Maybe<Merchant>
  /** fetch data from the table: "orders" */
  order: Array<Order>
  /** fetch aggregated fields from the table: "orders" */
  order_aggregate: Order_Aggregate
  /** fetch data from the table: "orders" using primary key columns */
  order_by_pk?: Maybe<Order>
  /** fetch data from the table: "order_rows" */
  order_row: Array<Order_Row>
  /** fetch aggregated fields from the table: "order_rows" */
  order_row_aggregate: Order_Row_Aggregate
  /** fetch data from the table: "order_rows" using primary key columns */
  order_row_by_pk?: Maybe<Order_Row>
  /** fetch data from the table: "placements" */
  placement: Array<Placement>
  /** fetch aggregated fields from the table: "placements" */
  placement_aggregate: Placement_Aggregate
  /** fetch data from the table: "placements" using primary key columns */
  placement_by_pk?: Maybe<Placement>
  /** fetch data from the table: "products" */
  product: Array<Product>
  /** fetch aggregated fields from the table: "products" */
  product_aggregate: Product_Aggregate
  /** fetch data from the table: "products" using primary key columns */
  product_by_pk?: Maybe<Product>
  /** fetch data from the table: "qr_codes" */
  qr_code: Array<Qr_Code>
  /** fetch aggregated fields from the table: "qr_codes" */
  qr_code_aggregate: Qr_Code_Aggregate
  /** fetch data from the table: "qr_codes" using primary key columns */
  qr_code_by_pk?: Maybe<Qr_Code>
  /** An array relationship */
  sessions: Array<Sessions>
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<Verification_Tokens>
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: Verification_Tokens_Aggregate
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<Verification_Tokens>
}

export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Accounts_Order_By>>
  where?: InputMaybe<Accounts_Bool_Exp>
}

export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Accounts_Order_By>>
  where?: InputMaybe<Accounts_Bool_Exp>
}

export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Category_Order_By>>
  where?: InputMaybe<Category_Bool_Exp>
}

export type Query_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Category_Order_By>>
  where?: InputMaybe<Category_Bool_Exp>
}

export type Query_RootCategory_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootCustomerArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Customer_Order_By>>
  where?: InputMaybe<Customer_Bool_Exp>
}

export type Query_RootCustomer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Customer_Order_By>>
  where?: InputMaybe<Customer_Bool_Exp>
}

export type Query_RootCustomer_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootEmployeeArgs = {
  distinct_on?: InputMaybe<Array<Employee_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Employee_Order_By>>
  where?: InputMaybe<Employee_Bool_Exp>
}

export type Query_RootEmployee_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Employee_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Employee_Order_By>>
  where?: InputMaybe<Employee_Bool_Exp>
}

export type Query_RootEmployee_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootMenuArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Menu_Order_By>>
  where?: InputMaybe<Menu_Bool_Exp>
}

export type Query_RootMenu_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Menu_Order_By>>
  where?: InputMaybe<Menu_Bool_Exp>
}

export type Query_RootMenu_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootMerchantArgs = {
  distinct_on?: InputMaybe<Array<Merchant_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Merchant_Order_By>>
  where?: InputMaybe<Merchant_Bool_Exp>
}

export type Query_RootMerchant_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Merchant_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Merchant_Order_By>>
  where?: InputMaybe<Merchant_Bool_Exp>
}

export type Query_RootMerchant_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootOrderArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Order_Order_By>>
  where?: InputMaybe<Order_Bool_Exp>
}

export type Query_RootOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Order_Order_By>>
  where?: InputMaybe<Order_Bool_Exp>
}

export type Query_RootOrder_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootOrder_RowArgs = {
  distinct_on?: InputMaybe<Array<Order_Row_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Order_Row_Order_By>>
  where?: InputMaybe<Order_Row_Bool_Exp>
}

export type Query_RootOrder_Row_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Row_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Order_Row_Order_By>>
  where?: InputMaybe<Order_Row_Bool_Exp>
}

export type Query_RootOrder_Row_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootPlacementArgs = {
  distinct_on?: InputMaybe<Array<Placement_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Placement_Order_By>>
  where?: InputMaybe<Placement_Bool_Exp>
}

export type Query_RootPlacement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Placement_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Placement_Order_By>>
  where?: InputMaybe<Placement_Bool_Exp>
}

export type Query_RootPlacement_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootProductArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Product_Order_By>>
  where?: InputMaybe<Product_Bool_Exp>
}

export type Query_RootProduct_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Product_Order_By>>
  where?: InputMaybe<Product_Bool_Exp>
}

export type Query_RootProduct_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootQr_CodeArgs = {
  distinct_on?: InputMaybe<Array<Qr_Code_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Qr_Code_Order_By>>
  where?: InputMaybe<Qr_Code_Bool_Exp>
}

export type Query_RootQr_Code_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Qr_Code_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Qr_Code_Order_By>>
  where?: InputMaybe<Qr_Code_Bool_Exp>
}

export type Query_RootQr_Code_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Sessions_Order_By>>
  where?: InputMaybe<Sessions_Bool_Exp>
}

export type Query_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Sessions_Order_By>>
  where?: InputMaybe<Sessions_Bool_Exp>
}

export type Query_RootSessions_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootVerification_TokensArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>
  where?: InputMaybe<Verification_Tokens_Bool_Exp>
}

export type Query_RootVerification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>
  where?: InputMaybe<Verification_Tokens_Bool_Exp>
}

export type Query_RootVerification_Tokens_By_PkArgs = {
  token: Scalars['String']
}

/** columns and relationships of "sessions" */
export type Sessions = {
  __typename?: 'sessions'
  expires?: Maybe<Scalars['timestamptz']>
  id: Scalars['uuid']
  sessionToken: Scalars['String']
  /** An object relationship */
  user: Users
  userId: Scalars['uuid']
}

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
  __typename?: 'sessions_aggregate'
  aggregate?: Maybe<Sessions_Aggregate_Fields>
  nodes: Array<Sessions>
}

export type Sessions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Sessions_Aggregate_Bool_Exp_Count>
}

export type Sessions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Sessions_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<Sessions_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
  __typename?: 'sessions_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Sessions_Max_Fields>
  min?: Maybe<Sessions_Min_Fields>
}

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sessions_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "sessions" */
export type Sessions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Sessions_Max_Order_By>
  min?: InputMaybe<Sessions_Min_Order_By>
}

/** input type for inserting array relation for remote table "sessions" */
export type Sessions_Arr_Rel_Insert_Input = {
  data: Array<Sessions_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Sessions_On_Conflict>
}

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<Sessions_Bool_Exp>>
  _not?: InputMaybe<Sessions_Bool_Exp>
  _or?: InputMaybe<Array<Sessions_Bool_Exp>>
  expires?: InputMaybe<Timestamptz_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  sessionToken?: InputMaybe<String_Comparison_Exp>
  user?: InputMaybe<Users_Bool_Exp>
  userId?: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "sessions" */
export enum Sessions_Constraint {
  /** unique or primary key constraint on columns "id" */
  SessionsPkey = 'sessions_pkey',
}

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['uuid']>
  sessionToken?: InputMaybe<Scalars['String']>
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>
  userId?: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Sessions_Max_Fields = {
  __typename?: 'sessions_max_fields'
  expires?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  sessionToken?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "sessions" */
export type Sessions_Max_Order_By = {
  expires?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  sessionToken?: InputMaybe<Order_By>
  userId?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Sessions_Min_Fields = {
  __typename?: 'sessions_min_fields'
  expires?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  sessionToken?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "sessions" */
export type Sessions_Min_Order_By = {
  expires?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  sessionToken?: InputMaybe<Order_By>
  userId?: InputMaybe<Order_By>
}

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
  __typename?: 'sessions_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Sessions>
}

/** on_conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint
  update_columns?: Array<Sessions_Update_Column>
  where?: InputMaybe<Sessions_Bool_Exp>
}

/** Ordering options when selecting data from "sessions". */
export type Sessions_Order_By = {
  expires?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  sessionToken?: InputMaybe<Order_By>
  user?: InputMaybe<Users_Order_By>
  userId?: InputMaybe<Order_By>
}

/** primary key columns input for table: sessions */
export type Sessions_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "sessions" */
export enum Sessions_Select_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['uuid']>
  sessionToken?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['uuid']>
}

/** Streaming cursor of the table "sessions" */
export type Sessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sessions_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Sessions_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['uuid']>
  sessionToken?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['uuid']>
}

/** update columns of table "sessions" */
export enum Sessions_Update_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId',
}

export type Sessions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sessions_Set_Input>
  where: Sessions_Bool_Exp
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** An array relationship */
  accounts: Array<Accounts>
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>
  /** fetch data from the table in a streaming manner: "accounts" */
  accounts_stream: Array<Accounts>
  /** fetch data from the table: "categories" */
  category: Array<Category>
  /** fetch aggregated fields from the table: "categories" */
  category_aggregate: Category_Aggregate
  /** fetch data from the table: "categories" using primary key columns */
  category_by_pk?: Maybe<Category>
  /** fetch data from the table in a streaming manner: "categories" */
  category_stream: Array<Category>
  /** fetch data from the table: "customers" */
  customer: Array<Customer>
  /** fetch aggregated fields from the table: "customers" */
  customer_aggregate: Customer_Aggregate
  /** fetch data from the table: "customers" using primary key columns */
  customer_by_pk?: Maybe<Customer>
  /** fetch data from the table in a streaming manner: "customers" */
  customer_stream: Array<Customer>
  /** fetch data from the table: "employees" */
  employee: Array<Employee>
  /** fetch aggregated fields from the table: "employees" */
  employee_aggregate: Employee_Aggregate
  /** fetch data from the table: "employees" using primary key columns */
  employee_by_pk?: Maybe<Employee>
  /** fetch data from the table in a streaming manner: "employees" */
  employee_stream: Array<Employee>
  /** fetch data from the table: "menus" */
  menu: Array<Menu>
  /** fetch aggregated fields from the table: "menus" */
  menu_aggregate: Menu_Aggregate
  /** fetch data from the table: "menus" using primary key columns */
  menu_by_pk?: Maybe<Menu>
  /** fetch data from the table in a streaming manner: "menus" */
  menu_stream: Array<Menu>
  /** fetch data from the table: "merchants" */
  merchant: Array<Merchant>
  /** fetch aggregated fields from the table: "merchants" */
  merchant_aggregate: Merchant_Aggregate
  /** fetch data from the table: "merchants" using primary key columns */
  merchant_by_pk?: Maybe<Merchant>
  /** fetch data from the table in a streaming manner: "merchants" */
  merchant_stream: Array<Merchant>
  /** fetch data from the table: "orders" */
  order: Array<Order>
  /** fetch aggregated fields from the table: "orders" */
  order_aggregate: Order_Aggregate
  /** fetch data from the table: "orders" using primary key columns */
  order_by_pk?: Maybe<Order>
  /** fetch data from the table: "order_rows" */
  order_row: Array<Order_Row>
  /** fetch aggregated fields from the table: "order_rows" */
  order_row_aggregate: Order_Row_Aggregate
  /** fetch data from the table: "order_rows" using primary key columns */
  order_row_by_pk?: Maybe<Order_Row>
  /** fetch data from the table in a streaming manner: "order_rows" */
  order_row_stream: Array<Order_Row>
  /** fetch data from the table in a streaming manner: "orders" */
  order_stream: Array<Order>
  /** fetch data from the table: "placements" */
  placement: Array<Placement>
  /** fetch aggregated fields from the table: "placements" */
  placement_aggregate: Placement_Aggregate
  /** fetch data from the table: "placements" using primary key columns */
  placement_by_pk?: Maybe<Placement>
  /** fetch data from the table in a streaming manner: "placements" */
  placement_stream: Array<Placement>
  /** fetch data from the table: "products" */
  product: Array<Product>
  /** fetch aggregated fields from the table: "products" */
  product_aggregate: Product_Aggregate
  /** fetch data from the table: "products" using primary key columns */
  product_by_pk?: Maybe<Product>
  /** fetch data from the table in a streaming manner: "products" */
  product_stream: Array<Product>
  /** fetch data from the table: "qr_codes" */
  qr_code: Array<Qr_Code>
  /** fetch aggregated fields from the table: "qr_codes" */
  qr_code_aggregate: Qr_Code_Aggregate
  /** fetch data from the table: "qr_codes" using primary key columns */
  qr_code_by_pk?: Maybe<Qr_Code>
  /** fetch data from the table in a streaming manner: "qr_codes" */
  qr_code_stream: Array<Qr_Code>
  /** An array relationship */
  sessions: Array<Sessions>
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>
  /** fetch data from the table in a streaming manner: "sessions" */
  sessions_stream: Array<Sessions>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<Verification_Tokens>
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: Verification_Tokens_Aggregate
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<Verification_Tokens>
  /** fetch data from the table in a streaming manner: "verification_tokens" */
  verification_tokens_stream: Array<Verification_Tokens>
}

export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Accounts_Order_By>>
  where?: InputMaybe<Accounts_Bool_Exp>
}

export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Accounts_Order_By>>
  where?: InputMaybe<Accounts_Bool_Exp>
}

export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootAccounts_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Accounts_Stream_Cursor_Input>>
  where?: InputMaybe<Accounts_Bool_Exp>
}

export type Subscription_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Category_Order_By>>
  where?: InputMaybe<Category_Bool_Exp>
}

export type Subscription_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Category_Order_By>>
  where?: InputMaybe<Category_Bool_Exp>
}

export type Subscription_RootCategory_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootCategory_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Category_Stream_Cursor_Input>>
  where?: InputMaybe<Category_Bool_Exp>
}

export type Subscription_RootCustomerArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Customer_Order_By>>
  where?: InputMaybe<Customer_Bool_Exp>
}

export type Subscription_RootCustomer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Customer_Order_By>>
  where?: InputMaybe<Customer_Bool_Exp>
}

export type Subscription_RootCustomer_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootCustomer_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Customer_Stream_Cursor_Input>>
  where?: InputMaybe<Customer_Bool_Exp>
}

export type Subscription_RootEmployeeArgs = {
  distinct_on?: InputMaybe<Array<Employee_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Employee_Order_By>>
  where?: InputMaybe<Employee_Bool_Exp>
}

export type Subscription_RootEmployee_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Employee_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Employee_Order_By>>
  where?: InputMaybe<Employee_Bool_Exp>
}

export type Subscription_RootEmployee_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootEmployee_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Employee_Stream_Cursor_Input>>
  where?: InputMaybe<Employee_Bool_Exp>
}

export type Subscription_RootMenuArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Menu_Order_By>>
  where?: InputMaybe<Menu_Bool_Exp>
}

export type Subscription_RootMenu_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Menu_Order_By>>
  where?: InputMaybe<Menu_Bool_Exp>
}

export type Subscription_RootMenu_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootMenu_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Menu_Stream_Cursor_Input>>
  where?: InputMaybe<Menu_Bool_Exp>
}

export type Subscription_RootMerchantArgs = {
  distinct_on?: InputMaybe<Array<Merchant_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Merchant_Order_By>>
  where?: InputMaybe<Merchant_Bool_Exp>
}

export type Subscription_RootMerchant_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Merchant_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Merchant_Order_By>>
  where?: InputMaybe<Merchant_Bool_Exp>
}

export type Subscription_RootMerchant_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootMerchant_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Merchant_Stream_Cursor_Input>>
  where?: InputMaybe<Merchant_Bool_Exp>
}

export type Subscription_RootOrderArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Order_Order_By>>
  where?: InputMaybe<Order_Bool_Exp>
}

export type Subscription_RootOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Order_Order_By>>
  where?: InputMaybe<Order_Bool_Exp>
}

export type Subscription_RootOrder_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootOrder_RowArgs = {
  distinct_on?: InputMaybe<Array<Order_Row_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Order_Row_Order_By>>
  where?: InputMaybe<Order_Row_Bool_Exp>
}

export type Subscription_RootOrder_Row_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Row_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Order_Row_Order_By>>
  where?: InputMaybe<Order_Row_Bool_Exp>
}

export type Subscription_RootOrder_Row_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootOrder_Row_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Order_Row_Stream_Cursor_Input>>
  where?: InputMaybe<Order_Row_Bool_Exp>
}

export type Subscription_RootOrder_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Order_Stream_Cursor_Input>>
  where?: InputMaybe<Order_Bool_Exp>
}

export type Subscription_RootPlacementArgs = {
  distinct_on?: InputMaybe<Array<Placement_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Placement_Order_By>>
  where?: InputMaybe<Placement_Bool_Exp>
}

export type Subscription_RootPlacement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Placement_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Placement_Order_By>>
  where?: InputMaybe<Placement_Bool_Exp>
}

export type Subscription_RootPlacement_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootPlacement_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Placement_Stream_Cursor_Input>>
  where?: InputMaybe<Placement_Bool_Exp>
}

export type Subscription_RootProductArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Product_Order_By>>
  where?: InputMaybe<Product_Bool_Exp>
}

export type Subscription_RootProduct_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Product_Order_By>>
  where?: InputMaybe<Product_Bool_Exp>
}

export type Subscription_RootProduct_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootProduct_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Product_Stream_Cursor_Input>>
  where?: InputMaybe<Product_Bool_Exp>
}

export type Subscription_RootQr_CodeArgs = {
  distinct_on?: InputMaybe<Array<Qr_Code_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Qr_Code_Order_By>>
  where?: InputMaybe<Qr_Code_Bool_Exp>
}

export type Subscription_RootQr_Code_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Qr_Code_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Qr_Code_Order_By>>
  where?: InputMaybe<Qr_Code_Bool_Exp>
}

export type Subscription_RootQr_Code_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootQr_Code_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Qr_Code_Stream_Cursor_Input>>
  where?: InputMaybe<Qr_Code_Bool_Exp>
}

export type Subscription_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Sessions_Order_By>>
  where?: InputMaybe<Sessions_Bool_Exp>
}

export type Subscription_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Sessions_Order_By>>
  where?: InputMaybe<Sessions_Bool_Exp>
}

export type Subscription_RootSessions_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootSessions_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Sessions_Stream_Cursor_Input>>
  where?: InputMaybe<Sessions_Bool_Exp>
}

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Subscription_RootVerification_TokensArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>
  where?: InputMaybe<Verification_Tokens_Bool_Exp>
}

export type Subscription_RootVerification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>
  where?: InputMaybe<Verification_Tokens_Bool_Exp>
}

export type Subscription_RootVerification_Tokens_By_PkArgs = {
  token: Scalars['String']
}

export type Subscription_RootVerification_Tokens_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Verification_Tokens_Stream_Cursor_Input>>
  where?: InputMaybe<Verification_Tokens_Bool_Exp>
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>
  _gt?: InputMaybe<Scalars['timestamptz']>
  _gte?: InputMaybe<Scalars['timestamptz']>
  _in?: InputMaybe<Array<Scalars['timestamptz']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['timestamptz']>
  _lte?: InputMaybe<Scalars['timestamptz']>
  _neq?: InputMaybe<Scalars['timestamptz']>
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users'
  /** An array relationship */
  accounts: Array<Accounts>
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate
  email?: Maybe<Scalars['String']>
  emailVerified?: Maybe<Scalars['timestamptz']>
  id: Scalars['uuid']
  image?: Maybe<Scalars['String']>
  /** An object relationship */
  merchant?: Maybe<Merchant>
  name?: Maybe<Scalars['String']>
  /** An array relationship */
  sessions: Array<Sessions>
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate
}

/** columns and relationships of "users" */
export type UsersAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Accounts_Order_By>>
  where?: InputMaybe<Accounts_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Accounts_Order_By>>
  where?: InputMaybe<Accounts_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Sessions_Order_By>>
  where?: InputMaybe<Sessions_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Sessions_Order_By>>
  where?: InputMaybe<Sessions_Bool_Exp>
}

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate'
  aggregate?: Maybe<Users_Aggregate_Fields>
  nodes: Array<Users>
}

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Users_Max_Fields>
  min?: Maybe<Users_Min_Fields>
}

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>
  _not?: InputMaybe<Users_Bool_Exp>
  _or?: InputMaybe<Array<Users_Bool_Exp>>
  accounts?: InputMaybe<Accounts_Bool_Exp>
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Bool_Exp>
  email?: InputMaybe<String_Comparison_Exp>
  emailVerified?: InputMaybe<Timestamptz_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  image?: InputMaybe<String_Comparison_Exp>
  merchant?: InputMaybe<Merchant_Bool_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  sessions?: InputMaybe<Sessions_Bool_Exp>
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Bool_Exp>
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  accounts?: InputMaybe<Accounts_Arr_Rel_Insert_Input>
  email?: InputMaybe<Scalars['String']>
  emailVerified?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['uuid']>
  image?: InputMaybe<Scalars['String']>
  merchant?: InputMaybe<Merchant_Obj_Rel_Insert_Input>
  name?: InputMaybe<Scalars['String']>
  sessions?: InputMaybe<Sessions_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields'
  email?: Maybe<Scalars['String']>
  emailVerified?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  image?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields'
  email?: Maybe<Scalars['String']>
  emailVerified?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  image?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Users>
}

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint
  update_columns?: Array<Users_Update_Column>
  where?: InputMaybe<Users_Bool_Exp>
}

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Order_By>
  email?: InputMaybe<Order_By>
  emailVerified?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  image?: InputMaybe<Order_By>
  merchant?: InputMaybe<Merchant_Order_By>
  name?: InputMaybe<Order_By>
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Order_By>
}

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']>
  emailVerified?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['uuid']>
  image?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']>
  emailVerified?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['uuid']>
  image?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>
  where: Users_Bool_Exp
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>
  _gt?: InputMaybe<Scalars['uuid']>
  _gte?: InputMaybe<Scalars['uuid']>
  _in?: InputMaybe<Array<Scalars['uuid']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['uuid']>
  _lte?: InputMaybe<Scalars['uuid']>
  _neq?: InputMaybe<Scalars['uuid']>
  _nin?: InputMaybe<Array<Scalars['uuid']>>
}

/** columns and relationships of "verification_tokens" */
export type Verification_Tokens = {
  __typename?: 'verification_tokens'
  expires?: Maybe<Scalars['timestamptz']>
  identifier: Scalars['String']
  token: Scalars['String']
}

/** aggregated selection of "verification_tokens" */
export type Verification_Tokens_Aggregate = {
  __typename?: 'verification_tokens_aggregate'
  aggregate?: Maybe<Verification_Tokens_Aggregate_Fields>
  nodes: Array<Verification_Tokens>
}

/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_Fields = {
  __typename?: 'verification_tokens_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Verification_Tokens_Max_Fields>
  min?: Maybe<Verification_Tokens_Min_Fields>
}

/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Verification_Tokens_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "verification_tokens". All fields are combined with a logical 'AND'. */
export type Verification_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Verification_Tokens_Bool_Exp>>
  _not?: InputMaybe<Verification_Tokens_Bool_Exp>
  _or?: InputMaybe<Array<Verification_Tokens_Bool_Exp>>
  expires?: InputMaybe<Timestamptz_Comparison_Exp>
  identifier?: InputMaybe<String_Comparison_Exp>
  token?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "verification_tokens" */
export enum Verification_Tokens_Constraint {
  /** unique or primary key constraint on columns "token" */
  VerificationTokensPkey = 'verification_tokens_pkey',
}

/** input type for inserting data into table "verification_tokens" */
export type Verification_Tokens_Insert_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>
  identifier?: InputMaybe<Scalars['String']>
  token?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Verification_Tokens_Max_Fields = {
  __typename?: 'verification_tokens_max_fields'
  expires?: Maybe<Scalars['timestamptz']>
  identifier?: Maybe<Scalars['String']>
  token?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Verification_Tokens_Min_Fields = {
  __typename?: 'verification_tokens_min_fields'
  expires?: Maybe<Scalars['timestamptz']>
  identifier?: Maybe<Scalars['String']>
  token?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "verification_tokens" */
export type Verification_Tokens_Mutation_Response = {
  __typename?: 'verification_tokens_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Verification_Tokens>
}

/** on_conflict condition type for table "verification_tokens" */
export type Verification_Tokens_On_Conflict = {
  constraint: Verification_Tokens_Constraint
  update_columns?: Array<Verification_Tokens_Update_Column>
  where?: InputMaybe<Verification_Tokens_Bool_Exp>
}

/** Ordering options when selecting data from "verification_tokens". */
export type Verification_Tokens_Order_By = {
  expires?: InputMaybe<Order_By>
  identifier?: InputMaybe<Order_By>
  token?: InputMaybe<Order_By>
}

/** primary key columns input for table: verification_tokens */
export type Verification_Tokens_Pk_Columns_Input = {
  token: Scalars['String']
}

/** select columns of table "verification_tokens" */
export enum Verification_Tokens_Select_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
}

/** input type for updating data in table "verification_tokens" */
export type Verification_Tokens_Set_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>
  identifier?: InputMaybe<Scalars['String']>
  token?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "verification_tokens" */
export type Verification_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Verification_Tokens_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Verification_Tokens_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>
  identifier?: InputMaybe<Scalars['String']>
  token?: InputMaybe<Scalars['String']>
}

/** update columns of table "verification_tokens" */
export enum Verification_Tokens_Update_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
}

export type Verification_Tokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Verification_Tokens_Set_Input>
  where: Verification_Tokens_Bool_Exp
}
