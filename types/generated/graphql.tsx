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
export type Categories = {
  __typename?: 'categories'
  id: Scalars['uuid']
  menuId: Scalars['uuid']
  name: Scalars['String']
  /** An array relationship */
  products: Array<Products>
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate
  sortOrder: Scalars['Int']
}

/** columns and relationships of "categories" */
export type CategoriesProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Products_Order_By>>
  where?: InputMaybe<Products_Bool_Exp>
}

/** columns and relationships of "categories" */
export type CategoriesProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Products_Order_By>>
  where?: InputMaybe<Products_Bool_Exp>
}

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate'
  aggregate?: Maybe<Categories_Aggregate_Fields>
  nodes: Array<Categories>
}

export type Categories_Aggregate_Bool_Exp = {
  count?: InputMaybe<Categories_Aggregate_Bool_Exp_Count>
}

export type Categories_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Categories_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<Categories_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields'
  avg?: Maybe<Categories_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Categories_Max_Fields>
  min?: Maybe<Categories_Min_Fields>
  stddev?: Maybe<Categories_Stddev_Fields>
  stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>
  sum?: Maybe<Categories_Sum_Fields>
  var_pop?: Maybe<Categories_Var_Pop_Fields>
  var_samp?: Maybe<Categories_Var_Samp_Fields>
  variance?: Maybe<Categories_Variance_Fields>
}

/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "categories" */
export type Categories_Aggregate_Order_By = {
  avg?: InputMaybe<Categories_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Categories_Max_Order_By>
  min?: InputMaybe<Categories_Min_Order_By>
  stddev?: InputMaybe<Categories_Stddev_Order_By>
  stddev_pop?: InputMaybe<Categories_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Categories_Stddev_Samp_Order_By>
  sum?: InputMaybe<Categories_Sum_Order_By>
  var_pop?: InputMaybe<Categories_Var_Pop_Order_By>
  var_samp?: InputMaybe<Categories_Var_Samp_Order_By>
  variance?: InputMaybe<Categories_Variance_Order_By>
}

/** input type for inserting array relation for remote table "categories" */
export type Categories_Arr_Rel_Insert_Input = {
  data: Array<Categories_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>
}

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: 'categories_avg_fields'
  sortOrder?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "categories" */
export type Categories_Avg_Order_By = {
  sortOrder?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>
  _not?: InputMaybe<Categories_Bool_Exp>
  _or?: InputMaybe<Array<Categories_Bool_Exp>>
  id?: InputMaybe<Uuid_Comparison_Exp>
  menuId?: InputMaybe<Uuid_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  products?: InputMaybe<Products_Bool_Exp>
  products_aggregate?: InputMaybe<Products_Aggregate_Bool_Exp>
  sortOrder?: InputMaybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  CategoriesPkey = 'categories_pkey',
}

/** input type for incrementing numeric columns in table "categories" */
export type Categories_Inc_Input = {
  sortOrder?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>
  menuId?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  products?: InputMaybe<Products_Arr_Rel_Insert_Input>
  sortOrder?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields'
  id?: Maybe<Scalars['uuid']>
  menuId?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  sortOrder?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "categories" */
export type Categories_Max_Order_By = {
  id?: InputMaybe<Order_By>
  menuId?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  sortOrder?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields'
  id?: Maybe<Scalars['uuid']>
  menuId?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  sortOrder?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "categories" */
export type Categories_Min_Order_By = {
  id?: InputMaybe<Order_By>
  menuId?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  sortOrder?: InputMaybe<Order_By>
}

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Categories>
}

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint
  update_columns?: Array<Categories_Update_Column>
  where?: InputMaybe<Categories_Bool_Exp>
}

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  id?: InputMaybe<Order_By>
  menuId?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  products_aggregate?: InputMaybe<Products_Aggregate_Order_By>
  sortOrder?: InputMaybe<Order_By>
}

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "categories" */
export enum Categories_Select_Column {
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
export type Categories_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>
  menuId?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  sortOrder?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: 'categories_stddev_fields'
  sortOrder?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "categories" */
export type Categories_Stddev_Order_By = {
  sortOrder?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: 'categories_stddev_pop_fields'
  sortOrder?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "categories" */
export type Categories_Stddev_Pop_Order_By = {
  sortOrder?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: 'categories_stddev_samp_fields'
  sortOrder?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "categories" */
export type Categories_Stddev_Samp_Order_By = {
  sortOrder?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>
  menuId?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  sortOrder?: InputMaybe<Scalars['Int']>
}

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: 'categories_sum_fields'
  sortOrder?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "categories" */
export type Categories_Sum_Order_By = {
  sortOrder?: InputMaybe<Order_By>
}

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MenuId = 'menuId',
  /** column name */
  Name = 'name',
  /** column name */
  SortOrder = 'sortOrder',
}

export type Categories_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Categories_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Categories_Set_Input>
  where: Categories_Bool_Exp
}

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: 'categories_var_pop_fields'
  sortOrder?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "categories" */
export type Categories_Var_Pop_Order_By = {
  sortOrder?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: 'categories_var_samp_fields'
  sortOrder?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "categories" */
export type Categories_Var_Samp_Order_By = {
  sortOrder?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
  __typename?: 'categories_variance_fields'
  sortOrder?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "categories" */
export type Categories_Variance_Order_By = {
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
export type Customers = {
  __typename?: 'customers'
  id: Scalars['uuid']
  /** An array relationship */
  orders: Array<Orders>
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate
}

/** columns and relationships of "customers" */
export type CustomersOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Orders_Order_By>>
  where?: InputMaybe<Orders_Bool_Exp>
}

/** columns and relationships of "customers" */
export type CustomersOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Orders_Order_By>>
  where?: InputMaybe<Orders_Bool_Exp>
}

/** aggregated selection of "customers" */
export type Customers_Aggregate = {
  __typename?: 'customers_aggregate'
  aggregate?: Maybe<Customers_Aggregate_Fields>
  nodes: Array<Customers>
}

/** aggregate fields of "customers" */
export type Customers_Aggregate_Fields = {
  __typename?: 'customers_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Customers_Max_Fields>
  min?: Maybe<Customers_Min_Fields>
}

/** aggregate fields of "customers" */
export type Customers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customers_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: InputMaybe<Array<Customers_Bool_Exp>>
  _not?: InputMaybe<Customers_Bool_Exp>
  _or?: InputMaybe<Array<Customers_Bool_Exp>>
  id?: InputMaybe<Uuid_Comparison_Exp>
  orders?: InputMaybe<Orders_Bool_Exp>
  orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>
}

/** unique or primary key constraints on table "customers" */
export enum Customers_Constraint {
  /** unique or primary key constraint on columns "id" */
  CustomersPkey = 'customers_pkey',
}

/** input type for inserting data into table "customers" */
export type Customers_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Customers_Max_Fields = {
  __typename?: 'customers_max_fields'
  id?: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export type Customers_Min_Fields = {
  __typename?: 'customers_min_fields'
  id?: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "customers" */
export type Customers_Mutation_Response = {
  __typename?: 'customers_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Customers>
}

/** on_conflict condition type for table "customers" */
export type Customers_On_Conflict = {
  constraint: Customers_Constraint
  update_columns?: Array<Customers_Update_Column>
  where?: InputMaybe<Customers_Bool_Exp>
}

/** Ordering options when selecting data from "customers". */
export type Customers_Order_By = {
  id?: InputMaybe<Order_By>
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>
}

/** primary key columns input for table: customers */
export type Customers_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "customers" */
export enum Customers_Select_Column {
  /** column name */
  Id = 'id',
}

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>
}

/** Streaming cursor of the table "customers" */
export type Customers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customers_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Customers_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>
}

/** update columns of table "customers" */
export enum Customers_Update_Column {
  /** column name */
  Id = 'id',
}

export type Customers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Customers_Set_Input>
  where: Customers_Bool_Exp
}

/** columns and relationships of "employees" */
export type Employees = {
  __typename?: 'employees'
  id: Scalars['uuid']
  merchantId: Scalars['uuid']
  name: Scalars['String']
  pin: Scalars['String']
  username: Scalars['String']
}

/** aggregated selection of "employees" */
export type Employees_Aggregate = {
  __typename?: 'employees_aggregate'
  aggregate?: Maybe<Employees_Aggregate_Fields>
  nodes: Array<Employees>
}

export type Employees_Aggregate_Bool_Exp = {
  count?: InputMaybe<Employees_Aggregate_Bool_Exp_Count>
}

export type Employees_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Employees_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<Employees_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "employees" */
export type Employees_Aggregate_Fields = {
  __typename?: 'employees_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Employees_Max_Fields>
  min?: Maybe<Employees_Min_Fields>
}

/** aggregate fields of "employees" */
export type Employees_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Employees_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "employees" */
export type Employees_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Employees_Max_Order_By>
  min?: InputMaybe<Employees_Min_Order_By>
}

/** input type for inserting array relation for remote table "employees" */
export type Employees_Arr_Rel_Insert_Input = {
  data: Array<Employees_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Employees_On_Conflict>
}

/** Boolean expression to filter rows from the table "employees". All fields are combined with a logical 'AND'. */
export type Employees_Bool_Exp = {
  _and?: InputMaybe<Array<Employees_Bool_Exp>>
  _not?: InputMaybe<Employees_Bool_Exp>
  _or?: InputMaybe<Array<Employees_Bool_Exp>>
  id?: InputMaybe<Uuid_Comparison_Exp>
  merchantId?: InputMaybe<Uuid_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  pin?: InputMaybe<String_Comparison_Exp>
  username?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "employees" */
export enum Employees_Constraint {
  /** unique or primary key constraint on columns "id" */
  EmployeesPkey = 'employees_pkey',
  /** unique or primary key constraint on columns "username" */
  EmployeesUsernameKey = 'employees_username_key',
}

/** input type for inserting data into table "employees" */
export type Employees_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>
  merchantId?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  pin?: InputMaybe<Scalars['String']>
  username?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Employees_Max_Fields = {
  __typename?: 'employees_max_fields'
  id?: Maybe<Scalars['uuid']>
  merchantId?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  pin?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "employees" */
export type Employees_Max_Order_By = {
  id?: InputMaybe<Order_By>
  merchantId?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  pin?: InputMaybe<Order_By>
  username?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Employees_Min_Fields = {
  __typename?: 'employees_min_fields'
  id?: Maybe<Scalars['uuid']>
  merchantId?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  pin?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "employees" */
export type Employees_Min_Order_By = {
  id?: InputMaybe<Order_By>
  merchantId?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  pin?: InputMaybe<Order_By>
  username?: InputMaybe<Order_By>
}

/** response of any mutation on the table "employees" */
export type Employees_Mutation_Response = {
  __typename?: 'employees_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Employees>
}

/** on_conflict condition type for table "employees" */
export type Employees_On_Conflict = {
  constraint: Employees_Constraint
  update_columns?: Array<Employees_Update_Column>
  where?: InputMaybe<Employees_Bool_Exp>
}

/** Ordering options when selecting data from "employees". */
export type Employees_Order_By = {
  id?: InputMaybe<Order_By>
  merchantId?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  pin?: InputMaybe<Order_By>
  username?: InputMaybe<Order_By>
}

/** primary key columns input for table: employees */
export type Employees_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "employees" */
export enum Employees_Select_Column {
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
export type Employees_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>
  merchantId?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  pin?: InputMaybe<Scalars['String']>
  username?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "employees" */
export type Employees_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Employees_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Employees_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>
  merchantId?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  pin?: InputMaybe<Scalars['String']>
  username?: InputMaybe<Scalars['String']>
}

/** update columns of table "employees" */
export enum Employees_Update_Column {
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

export type Employees_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Employees_Set_Input>
  where: Employees_Bool_Exp
}

/** columns and relationships of "menus" */
export type Menus = {
  __typename?: 'menus'
  /** An array relationship */
  categories: Array<Categories>
  /** An aggregate relationship */
  categories_aggregate: Categories_Aggregate
  id: Scalars['uuid']
  merchantId: Scalars['uuid']
}

/** columns and relationships of "menus" */
export type MenusCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Categories_Order_By>>
  where?: InputMaybe<Categories_Bool_Exp>
}

/** columns and relationships of "menus" */
export type MenusCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Categories_Order_By>>
  where?: InputMaybe<Categories_Bool_Exp>
}

/** aggregated selection of "menus" */
export type Menus_Aggregate = {
  __typename?: 'menus_aggregate'
  aggregate?: Maybe<Menus_Aggregate_Fields>
  nodes: Array<Menus>
}

/** aggregate fields of "menus" */
export type Menus_Aggregate_Fields = {
  __typename?: 'menus_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Menus_Max_Fields>
  min?: Maybe<Menus_Min_Fields>
}

/** aggregate fields of "menus" */
export type Menus_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Menus_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "menus". All fields are combined with a logical 'AND'. */
export type Menus_Bool_Exp = {
  _and?: InputMaybe<Array<Menus_Bool_Exp>>
  _not?: InputMaybe<Menus_Bool_Exp>
  _or?: InputMaybe<Array<Menus_Bool_Exp>>
  categories?: InputMaybe<Categories_Bool_Exp>
  categories_aggregate?: InputMaybe<Categories_Aggregate_Bool_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  merchantId?: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "menus" */
export enum Menus_Constraint {
  /** unique or primary key constraint on columns "merchantId" */
  MenusMerchantIdKey = 'menus_merchantId_key',
  /** unique or primary key constraint on columns "id" */
  MenusPkey = 'menus_pkey',
}

/** input type for inserting data into table "menus" */
export type Menus_Insert_Input = {
  categories?: InputMaybe<Categories_Arr_Rel_Insert_Input>
  id?: InputMaybe<Scalars['uuid']>
  merchantId?: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Menus_Max_Fields = {
  __typename?: 'menus_max_fields'
  id?: Maybe<Scalars['uuid']>
  merchantId?: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export type Menus_Min_Fields = {
  __typename?: 'menus_min_fields'
  id?: Maybe<Scalars['uuid']>
  merchantId?: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "menus" */
export type Menus_Mutation_Response = {
  __typename?: 'menus_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Menus>
}

/** input type for inserting object relation for remote table "menus" */
export type Menus_Obj_Rel_Insert_Input = {
  data: Menus_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Menus_On_Conflict>
}

/** on_conflict condition type for table "menus" */
export type Menus_On_Conflict = {
  constraint: Menus_Constraint
  update_columns?: Array<Menus_Update_Column>
  where?: InputMaybe<Menus_Bool_Exp>
}

/** Ordering options when selecting data from "menus". */
export type Menus_Order_By = {
  categories_aggregate?: InputMaybe<Categories_Aggregate_Order_By>
  id?: InputMaybe<Order_By>
  merchantId?: InputMaybe<Order_By>
}

/** primary key columns input for table: menus */
export type Menus_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "menus" */
export enum Menus_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MerchantId = 'merchantId',
}

/** input type for updating data in table "menus" */
export type Menus_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>
  merchantId?: InputMaybe<Scalars['uuid']>
}

/** Streaming cursor of the table "menus" */
export type Menus_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Menus_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Menus_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>
  merchantId?: InputMaybe<Scalars['uuid']>
}

/** update columns of table "menus" */
export enum Menus_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MerchantId = 'merchantId',
}

export type Menus_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Menus_Set_Input>
  where: Menus_Bool_Exp
}

/** columns and relationships of "merchants" */
export type Merchants = {
  __typename?: 'merchants'
  address?: Maybe<Scalars['String']>
  currency: Scalars['String']
  /** An array relationship */
  employees: Array<Employees>
  /** An aggregate relationship */
  employees_aggregate: Employees_Aggregate
  id: Scalars['uuid']
  lang: Scalars['String']
  /** An object relationship */
  menu?: Maybe<Menus>
  name: Scalars['String']
  /** An array relationship */
  orders: Array<Orders>
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate
  phone?: Maybe<Scalars['String']>
  /** An array relationship */
  placements: Array<Placements>
  /** An aggregate relationship */
  placements_aggregate: Placements_Aggregate
  slug: Scalars['String']
  userId: Scalars['uuid']
  wifi?: Maybe<Scalars['String']>
}

/** columns and relationships of "merchants" */
export type MerchantsEmployeesArgs = {
  distinct_on?: InputMaybe<Array<Employees_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Employees_Order_By>>
  where?: InputMaybe<Employees_Bool_Exp>
}

/** columns and relationships of "merchants" */
export type MerchantsEmployees_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Employees_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Employees_Order_By>>
  where?: InputMaybe<Employees_Bool_Exp>
}

/** columns and relationships of "merchants" */
export type MerchantsOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Orders_Order_By>>
  where?: InputMaybe<Orders_Bool_Exp>
}

/** columns and relationships of "merchants" */
export type MerchantsOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Orders_Order_By>>
  where?: InputMaybe<Orders_Bool_Exp>
}

/** columns and relationships of "merchants" */
export type MerchantsPlacementsArgs = {
  distinct_on?: InputMaybe<Array<Placements_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Placements_Order_By>>
  where?: InputMaybe<Placements_Bool_Exp>
}

/** columns and relationships of "merchants" */
export type MerchantsPlacements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Placements_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Placements_Order_By>>
  where?: InputMaybe<Placements_Bool_Exp>
}

/** aggregated selection of "merchants" */
export type Merchants_Aggregate = {
  __typename?: 'merchants_aggregate'
  aggregate?: Maybe<Merchants_Aggregate_Fields>
  nodes: Array<Merchants>
}

/** aggregate fields of "merchants" */
export type Merchants_Aggregate_Fields = {
  __typename?: 'merchants_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Merchants_Max_Fields>
  min?: Maybe<Merchants_Min_Fields>
}

/** aggregate fields of "merchants" */
export type Merchants_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Merchants_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "merchants". All fields are combined with a logical 'AND'. */
export type Merchants_Bool_Exp = {
  _and?: InputMaybe<Array<Merchants_Bool_Exp>>
  _not?: InputMaybe<Merchants_Bool_Exp>
  _or?: InputMaybe<Array<Merchants_Bool_Exp>>
  address?: InputMaybe<String_Comparison_Exp>
  currency?: InputMaybe<String_Comparison_Exp>
  employees?: InputMaybe<Employees_Bool_Exp>
  employees_aggregate?: InputMaybe<Employees_Aggregate_Bool_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  lang?: InputMaybe<String_Comparison_Exp>
  menu?: InputMaybe<Menus_Bool_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  orders?: InputMaybe<Orders_Bool_Exp>
  orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>
  phone?: InputMaybe<String_Comparison_Exp>
  placements?: InputMaybe<Placements_Bool_Exp>
  placements_aggregate?: InputMaybe<Placements_Aggregate_Bool_Exp>
  slug?: InputMaybe<String_Comparison_Exp>
  userId?: InputMaybe<Uuid_Comparison_Exp>
  wifi?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "merchants" */
export enum Merchants_Constraint {
  /** unique or primary key constraint on columns "id" */
  MerchantsPkey = 'merchants_pkey',
  /** unique or primary key constraint on columns "slug" */
  MerchantsSlugKey = 'merchants_slug_key',
  /** unique or primary key constraint on columns "userId" */
  MerchantsUserIdKey = 'merchants_userId_key',
}

/** input type for inserting data into table "merchants" */
export type Merchants_Insert_Input = {
  address?: InputMaybe<Scalars['String']>
  currency?: InputMaybe<Scalars['String']>
  employees?: InputMaybe<Employees_Arr_Rel_Insert_Input>
  id?: InputMaybe<Scalars['uuid']>
  lang?: InputMaybe<Scalars['String']>
  menu?: InputMaybe<Menus_Obj_Rel_Insert_Input>
  name?: InputMaybe<Scalars['String']>
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>
  phone?: InputMaybe<Scalars['String']>
  placements?: InputMaybe<Placements_Arr_Rel_Insert_Input>
  slug?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['uuid']>
  wifi?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Merchants_Max_Fields = {
  __typename?: 'merchants_max_fields'
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
export type Merchants_Min_Fields = {
  __typename?: 'merchants_min_fields'
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
export type Merchants_Mutation_Response = {
  __typename?: 'merchants_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Merchants>
}

/** input type for inserting object relation for remote table "merchants" */
export type Merchants_Obj_Rel_Insert_Input = {
  data: Merchants_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Merchants_On_Conflict>
}

/** on_conflict condition type for table "merchants" */
export type Merchants_On_Conflict = {
  constraint: Merchants_Constraint
  update_columns?: Array<Merchants_Update_Column>
  where?: InputMaybe<Merchants_Bool_Exp>
}

/** Ordering options when selecting data from "merchants". */
export type Merchants_Order_By = {
  address?: InputMaybe<Order_By>
  currency?: InputMaybe<Order_By>
  employees_aggregate?: InputMaybe<Employees_Aggregate_Order_By>
  id?: InputMaybe<Order_By>
  lang?: InputMaybe<Order_By>
  menu?: InputMaybe<Menus_Order_By>
  name?: InputMaybe<Order_By>
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>
  phone?: InputMaybe<Order_By>
  placements_aggregate?: InputMaybe<Placements_Aggregate_Order_By>
  slug?: InputMaybe<Order_By>
  userId?: InputMaybe<Order_By>
  wifi?: InputMaybe<Order_By>
}

/** primary key columns input for table: merchants */
export type Merchants_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "merchants" */
export enum Merchants_Select_Column {
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
export type Merchants_Set_Input = {
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

/** Streaming cursor of the table "merchants" */
export type Merchants_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Merchants_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Merchants_Stream_Cursor_Value_Input = {
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
export enum Merchants_Update_Column {
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

export type Merchants_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Merchants_Set_Input>
  where: Merchants_Bool_Exp
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>
  /** delete data from the table: "customers" */
  delete_customers?: Maybe<Customers_Mutation_Response>
  /** delete single row from the table: "customers" */
  delete_customers_by_pk?: Maybe<Customers>
  /** delete data from the table: "employees" */
  delete_employees?: Maybe<Employees_Mutation_Response>
  /** delete single row from the table: "employees" */
  delete_employees_by_pk?: Maybe<Employees>
  /** delete data from the table: "menus" */
  delete_menus?: Maybe<Menus_Mutation_Response>
  /** delete single row from the table: "menus" */
  delete_menus_by_pk?: Maybe<Menus>
  /** delete data from the table: "merchants" */
  delete_merchants?: Maybe<Merchants_Mutation_Response>
  /** delete single row from the table: "merchants" */
  delete_merchants_by_pk?: Maybe<Merchants>
  /** delete data from the table: "order_rows" */
  delete_order_rows?: Maybe<Order_Rows_Mutation_Response>
  /** delete single row from the table: "order_rows" */
  delete_order_rows_by_pk?: Maybe<Order_Rows>
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>
  /** delete data from the table: "placements" */
  delete_placements?: Maybe<Placements_Mutation_Response>
  /** delete single row from the table: "placements" */
  delete_placements_by_pk?: Maybe<Placements>
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>
  /** delete data from the table: "qr_codes" */
  delete_qr_codes?: Maybe<Qr_Codes_Mutation_Response>
  /** delete single row from the table: "qr_codes" */
  delete_qr_codes_by_pk?: Maybe<Qr_Codes>
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
  insert_categories?: Maybe<Categories_Mutation_Response>
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>
  /** insert data into the table: "customers" */
  insert_customers?: Maybe<Customers_Mutation_Response>
  /** insert a single row into the table: "customers" */
  insert_customers_one?: Maybe<Customers>
  /** insert data into the table: "employees" */
  insert_employees?: Maybe<Employees_Mutation_Response>
  /** insert a single row into the table: "employees" */
  insert_employees_one?: Maybe<Employees>
  /** insert data into the table: "menus" */
  insert_menus?: Maybe<Menus_Mutation_Response>
  /** insert a single row into the table: "menus" */
  insert_menus_one?: Maybe<Menus>
  /** insert data into the table: "merchants" */
  insert_merchants?: Maybe<Merchants_Mutation_Response>
  /** insert a single row into the table: "merchants" */
  insert_merchants_one?: Maybe<Merchants>
  /** insert data into the table: "order_rows" */
  insert_order_rows?: Maybe<Order_Rows_Mutation_Response>
  /** insert a single row into the table: "order_rows" */
  insert_order_rows_one?: Maybe<Order_Rows>
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>
  /** insert data into the table: "placements" */
  insert_placements?: Maybe<Placements_Mutation_Response>
  /** insert a single row into the table: "placements" */
  insert_placements_one?: Maybe<Placements>
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>
  /** insert data into the table: "qr_codes" */
  insert_qr_codes?: Maybe<Qr_Codes_Mutation_Response>
  /** insert a single row into the table: "qr_codes" */
  insert_qr_codes_one?: Maybe<Qr_Codes>
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
  update_categories?: Maybe<Categories_Mutation_Response>
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>
  /** update multiples rows of table: "categories" */
  update_categories_many?: Maybe<Array<Maybe<Categories_Mutation_Response>>>
  /** update data of the table: "customers" */
  update_customers?: Maybe<Customers_Mutation_Response>
  /** update single row of the table: "customers" */
  update_customers_by_pk?: Maybe<Customers>
  /** update multiples rows of table: "customers" */
  update_customers_many?: Maybe<Array<Maybe<Customers_Mutation_Response>>>
  /** update data of the table: "employees" */
  update_employees?: Maybe<Employees_Mutation_Response>
  /** update single row of the table: "employees" */
  update_employees_by_pk?: Maybe<Employees>
  /** update multiples rows of table: "employees" */
  update_employees_many?: Maybe<Array<Maybe<Employees_Mutation_Response>>>
  /** update data of the table: "menus" */
  update_menus?: Maybe<Menus_Mutation_Response>
  /** update single row of the table: "menus" */
  update_menus_by_pk?: Maybe<Menus>
  /** update multiples rows of table: "menus" */
  update_menus_many?: Maybe<Array<Maybe<Menus_Mutation_Response>>>
  /** update data of the table: "merchants" */
  update_merchants?: Maybe<Merchants_Mutation_Response>
  /** update single row of the table: "merchants" */
  update_merchants_by_pk?: Maybe<Merchants>
  /** update multiples rows of table: "merchants" */
  update_merchants_many?: Maybe<Array<Maybe<Merchants_Mutation_Response>>>
  /** update data of the table: "order_rows" */
  update_order_rows?: Maybe<Order_Rows_Mutation_Response>
  /** update single row of the table: "order_rows" */
  update_order_rows_by_pk?: Maybe<Order_Rows>
  /** update multiples rows of table: "order_rows" */
  update_order_rows_many?: Maybe<Array<Maybe<Order_Rows_Mutation_Response>>>
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>
  /** update multiples rows of table: "orders" */
  update_orders_many?: Maybe<Array<Maybe<Orders_Mutation_Response>>>
  /** update data of the table: "placements" */
  update_placements?: Maybe<Placements_Mutation_Response>
  /** update single row of the table: "placements" */
  update_placements_by_pk?: Maybe<Placements>
  /** update multiples rows of table: "placements" */
  update_placements_many?: Maybe<Array<Maybe<Placements_Mutation_Response>>>
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>
  /** update multiples rows of table: "products" */
  update_products_many?: Maybe<Array<Maybe<Products_Mutation_Response>>>
  /** update data of the table: "qr_codes" */
  update_qr_codes?: Maybe<Qr_Codes_Mutation_Response>
  /** update single row of the table: "qr_codes" */
  update_qr_codes_by_pk?: Maybe<Qr_Codes>
  /** update multiples rows of table: "qr_codes" */
  update_qr_codes_many?: Maybe<Array<Maybe<Qr_Codes_Mutation_Response>>>
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
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_CustomersArgs = {
  where: Customers_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Customers_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_EmployeesArgs = {
  where: Employees_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Employees_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_MenusArgs = {
  where: Menus_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Menus_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_MerchantsArgs = {
  where: Merchants_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Merchants_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Order_RowsArgs = {
  where: Order_Rows_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Order_Rows_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_PlacementsArgs = {
  where: Placements_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Placements_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Qr_CodesArgs = {
  where: Qr_Codes_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Qr_Codes_By_PkArgs = {
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
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>
  on_conflict?: InputMaybe<Categories_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input
  on_conflict?: InputMaybe<Categories_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_CustomersArgs = {
  objects: Array<Customers_Insert_Input>
  on_conflict?: InputMaybe<Customers_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Customers_OneArgs = {
  object: Customers_Insert_Input
  on_conflict?: InputMaybe<Customers_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_EmployeesArgs = {
  objects: Array<Employees_Insert_Input>
  on_conflict?: InputMaybe<Employees_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Employees_OneArgs = {
  object: Employees_Insert_Input
  on_conflict?: InputMaybe<Employees_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_MenusArgs = {
  objects: Array<Menus_Insert_Input>
  on_conflict?: InputMaybe<Menus_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Menus_OneArgs = {
  object: Menus_Insert_Input
  on_conflict?: InputMaybe<Menus_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_MerchantsArgs = {
  objects: Array<Merchants_Insert_Input>
  on_conflict?: InputMaybe<Merchants_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Merchants_OneArgs = {
  object: Merchants_Insert_Input
  on_conflict?: InputMaybe<Merchants_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Order_RowsArgs = {
  objects: Array<Order_Rows_Insert_Input>
  on_conflict?: InputMaybe<Order_Rows_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Order_Rows_OneArgs = {
  object: Order_Rows_Insert_Input
  on_conflict?: InputMaybe<Order_Rows_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>
  on_conflict?: InputMaybe<Orders_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input
  on_conflict?: InputMaybe<Orders_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_PlacementsArgs = {
  objects: Array<Placements_Insert_Input>
  on_conflict?: InputMaybe<Placements_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Placements_OneArgs = {
  object: Placements_Insert_Input
  on_conflict?: InputMaybe<Placements_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>
  on_conflict?: InputMaybe<Products_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input
  on_conflict?: InputMaybe<Products_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Qr_CodesArgs = {
  objects: Array<Qr_Codes_Insert_Input>
  on_conflict?: InputMaybe<Qr_Codes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Qr_Codes_OneArgs = {
  object: Qr_Codes_Insert_Input
  on_conflict?: InputMaybe<Qr_Codes_On_Conflict>
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
export type Mutation_RootUpdate_CategoriesArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>
  _set?: InputMaybe<Categories_Set_Input>
  where: Categories_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>
  _set?: InputMaybe<Categories_Set_Input>
  pk_columns: Categories_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Categories_ManyArgs = {
  updates: Array<Categories_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_CustomersArgs = {
  _set?: InputMaybe<Customers_Set_Input>
  where: Customers_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Customers_By_PkArgs = {
  _set?: InputMaybe<Customers_Set_Input>
  pk_columns: Customers_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Customers_ManyArgs = {
  updates: Array<Customers_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_EmployeesArgs = {
  _set?: InputMaybe<Employees_Set_Input>
  where: Employees_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Employees_By_PkArgs = {
  _set?: InputMaybe<Employees_Set_Input>
  pk_columns: Employees_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Employees_ManyArgs = {
  updates: Array<Employees_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_MenusArgs = {
  _set?: InputMaybe<Menus_Set_Input>
  where: Menus_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Menus_By_PkArgs = {
  _set?: InputMaybe<Menus_Set_Input>
  pk_columns: Menus_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Menus_ManyArgs = {
  updates: Array<Menus_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_MerchantsArgs = {
  _set?: InputMaybe<Merchants_Set_Input>
  where: Merchants_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Merchants_By_PkArgs = {
  _set?: InputMaybe<Merchants_Set_Input>
  pk_columns: Merchants_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Merchants_ManyArgs = {
  updates: Array<Merchants_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Order_RowsArgs = {
  _inc?: InputMaybe<Order_Rows_Inc_Input>
  _set?: InputMaybe<Order_Rows_Set_Input>
  where: Order_Rows_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Order_Rows_By_PkArgs = {
  _inc?: InputMaybe<Order_Rows_Inc_Input>
  _set?: InputMaybe<Order_Rows_Set_Input>
  pk_columns: Order_Rows_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Order_Rows_ManyArgs = {
  updates: Array<Order_Rows_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _set?: InputMaybe<Orders_Set_Input>
  where: Orders_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _set?: InputMaybe<Orders_Set_Input>
  pk_columns: Orders_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Orders_ManyArgs = {
  updates: Array<Orders_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_PlacementsArgs = {
  _set?: InputMaybe<Placements_Set_Input>
  where: Placements_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Placements_By_PkArgs = {
  _set?: InputMaybe<Placements_Set_Input>
  pk_columns: Placements_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Placements_ManyArgs = {
  updates: Array<Placements_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: InputMaybe<Products_Inc_Input>
  _set?: InputMaybe<Products_Set_Input>
  where: Products_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: InputMaybe<Products_Inc_Input>
  _set?: InputMaybe<Products_Set_Input>
  pk_columns: Products_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Products_ManyArgs = {
  updates: Array<Products_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Qr_CodesArgs = {
  _set?: InputMaybe<Qr_Codes_Set_Input>
  where: Qr_Codes_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Qr_Codes_By_PkArgs = {
  _set?: InputMaybe<Qr_Codes_Set_Input>
  pk_columns: Qr_Codes_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Qr_Codes_ManyArgs = {
  updates: Array<Qr_Codes_Updates>
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

/** columns and relationships of "order_rows" */
export type Order_Rows = {
  __typename?: 'order_rows'
  amount: Scalars['Int']
  id: Scalars['uuid']
  orderId: Scalars['uuid']
  productId: Scalars['uuid']
}

/** aggregated selection of "order_rows" */
export type Order_Rows_Aggregate = {
  __typename?: 'order_rows_aggregate'
  aggregate?: Maybe<Order_Rows_Aggregate_Fields>
  nodes: Array<Order_Rows>
}

export type Order_Rows_Aggregate_Bool_Exp = {
  count?: InputMaybe<Order_Rows_Aggregate_Bool_Exp_Count>
}

export type Order_Rows_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Order_Rows_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<Order_Rows_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "order_rows" */
export type Order_Rows_Aggregate_Fields = {
  __typename?: 'order_rows_aggregate_fields'
  avg?: Maybe<Order_Rows_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Order_Rows_Max_Fields>
  min?: Maybe<Order_Rows_Min_Fields>
  stddev?: Maybe<Order_Rows_Stddev_Fields>
  stddev_pop?: Maybe<Order_Rows_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Order_Rows_Stddev_Samp_Fields>
  sum?: Maybe<Order_Rows_Sum_Fields>
  var_pop?: Maybe<Order_Rows_Var_Pop_Fields>
  var_samp?: Maybe<Order_Rows_Var_Samp_Fields>
  variance?: Maybe<Order_Rows_Variance_Fields>
}

/** aggregate fields of "order_rows" */
export type Order_Rows_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Rows_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "order_rows" */
export type Order_Rows_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Rows_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Order_Rows_Max_Order_By>
  min?: InputMaybe<Order_Rows_Min_Order_By>
  stddev?: InputMaybe<Order_Rows_Stddev_Order_By>
  stddev_pop?: InputMaybe<Order_Rows_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Order_Rows_Stddev_Samp_Order_By>
  sum?: InputMaybe<Order_Rows_Sum_Order_By>
  var_pop?: InputMaybe<Order_Rows_Var_Pop_Order_By>
  var_samp?: InputMaybe<Order_Rows_Var_Samp_Order_By>
  variance?: InputMaybe<Order_Rows_Variance_Order_By>
}

/** input type for inserting array relation for remote table "order_rows" */
export type Order_Rows_Arr_Rel_Insert_Input = {
  data: Array<Order_Rows_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Order_Rows_On_Conflict>
}

/** aggregate avg on columns */
export type Order_Rows_Avg_Fields = {
  __typename?: 'order_rows_avg_fields'
  amount?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "order_rows" */
export type Order_Rows_Avg_Order_By = {
  amount?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "order_rows". All fields are combined with a logical 'AND'. */
export type Order_Rows_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Rows_Bool_Exp>>
  _not?: InputMaybe<Order_Rows_Bool_Exp>
  _or?: InputMaybe<Array<Order_Rows_Bool_Exp>>
  amount?: InputMaybe<Int_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  orderId?: InputMaybe<Uuid_Comparison_Exp>
  productId?: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "order_rows" */
export enum Order_Rows_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderRowsPkey = 'order_rows_pkey',
}

/** input type for incrementing numeric columns in table "order_rows" */
export type Order_Rows_Inc_Input = {
  amount?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "order_rows" */
export type Order_Rows_Insert_Input = {
  amount?: InputMaybe<Scalars['Int']>
  id?: InputMaybe<Scalars['uuid']>
  orderId?: InputMaybe<Scalars['uuid']>
  productId?: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Order_Rows_Max_Fields = {
  __typename?: 'order_rows_max_fields'
  amount?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['uuid']>
  orderId?: Maybe<Scalars['uuid']>
  productId?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "order_rows" */
export type Order_Rows_Max_Order_By = {
  amount?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  orderId?: InputMaybe<Order_By>
  productId?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Order_Rows_Min_Fields = {
  __typename?: 'order_rows_min_fields'
  amount?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['uuid']>
  orderId?: Maybe<Scalars['uuid']>
  productId?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "order_rows" */
export type Order_Rows_Min_Order_By = {
  amount?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  orderId?: InputMaybe<Order_By>
  productId?: InputMaybe<Order_By>
}

/** response of any mutation on the table "order_rows" */
export type Order_Rows_Mutation_Response = {
  __typename?: 'order_rows_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Order_Rows>
}

/** on_conflict condition type for table "order_rows" */
export type Order_Rows_On_Conflict = {
  constraint: Order_Rows_Constraint
  update_columns?: Array<Order_Rows_Update_Column>
  where?: InputMaybe<Order_Rows_Bool_Exp>
}

/** Ordering options when selecting data from "order_rows". */
export type Order_Rows_Order_By = {
  amount?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  orderId?: InputMaybe<Order_By>
  productId?: InputMaybe<Order_By>
}

/** primary key columns input for table: order_rows */
export type Order_Rows_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "order_rows" */
export enum Order_Rows_Select_Column {
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
export type Order_Rows_Set_Input = {
  amount?: InputMaybe<Scalars['Int']>
  id?: InputMaybe<Scalars['uuid']>
  orderId?: InputMaybe<Scalars['uuid']>
  productId?: InputMaybe<Scalars['uuid']>
}

/** aggregate stddev on columns */
export type Order_Rows_Stddev_Fields = {
  __typename?: 'order_rows_stddev_fields'
  amount?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "order_rows" */
export type Order_Rows_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Order_Rows_Stddev_Pop_Fields = {
  __typename?: 'order_rows_stddev_pop_fields'
  amount?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "order_rows" */
export type Order_Rows_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Order_Rows_Stddev_Samp_Fields = {
  __typename?: 'order_rows_stddev_samp_fields'
  amount?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "order_rows" */
export type Order_Rows_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "order_rows" */
export type Order_Rows_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Rows_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Order_Rows_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['Int']>
  id?: InputMaybe<Scalars['uuid']>
  orderId?: InputMaybe<Scalars['uuid']>
  productId?: InputMaybe<Scalars['uuid']>
}

/** aggregate sum on columns */
export type Order_Rows_Sum_Fields = {
  __typename?: 'order_rows_sum_fields'
  amount?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "order_rows" */
export type Order_Rows_Sum_Order_By = {
  amount?: InputMaybe<Order_By>
}

/** update columns of table "order_rows" */
export enum Order_Rows_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'orderId',
  /** column name */
  ProductId = 'productId',
}

export type Order_Rows_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Order_Rows_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Rows_Set_Input>
  where: Order_Rows_Bool_Exp
}

/** aggregate var_pop on columns */
export type Order_Rows_Var_Pop_Fields = {
  __typename?: 'order_rows_var_pop_fields'
  amount?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "order_rows" */
export type Order_Rows_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Order_Rows_Var_Samp_Fields = {
  __typename?: 'order_rows_var_samp_fields'
  amount?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "order_rows" */
export type Order_Rows_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Order_Rows_Variance_Fields = {
  __typename?: 'order_rows_variance_fields'
  amount?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "order_rows" */
export type Order_Rows_Variance_Order_By = {
  amount?: InputMaybe<Order_By>
}

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders'
  customerId: Scalars['uuid']
  id: Scalars['uuid']
  merchantId: Scalars['uuid']
  placementId: Scalars['uuid']
  /** An array relationship */
  rows: Array<Order_Rows>
  /** An aggregate relationship */
  rows_aggregate: Order_Rows_Aggregate
  status: Scalars['String']
}

/** columns and relationships of "orders" */
export type OrdersRowsArgs = {
  distinct_on?: InputMaybe<Array<Order_Rows_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Order_Rows_Order_By>>
  where?: InputMaybe<Order_Rows_Bool_Exp>
}

/** columns and relationships of "orders" */
export type OrdersRows_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Rows_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Order_Rows_Order_By>>
  where?: InputMaybe<Order_Rows_Bool_Exp>
}

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate'
  aggregate?: Maybe<Orders_Aggregate_Fields>
  nodes: Array<Orders>
}

export type Orders_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orders_Aggregate_Bool_Exp_Count>
}

export type Orders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orders_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<Orders_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Orders_Max_Fields>
  min?: Maybe<Orders_Min_Fields>
}

/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Orders_Max_Order_By>
  min?: InputMaybe<Orders_Min_Order_By>
}

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>
}

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>
  _not?: InputMaybe<Orders_Bool_Exp>
  _or?: InputMaybe<Array<Orders_Bool_Exp>>
  customerId?: InputMaybe<Uuid_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  merchantId?: InputMaybe<Uuid_Comparison_Exp>
  placementId?: InputMaybe<Uuid_Comparison_Exp>
  rows?: InputMaybe<Order_Rows_Bool_Exp>
  rows_aggregate?: InputMaybe<Order_Rows_Aggregate_Bool_Exp>
  status?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersPkey = 'orders_pkey',
}

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  customerId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  merchantId?: InputMaybe<Scalars['uuid']>
  placementId?: InputMaybe<Scalars['uuid']>
  rows?: InputMaybe<Order_Rows_Arr_Rel_Insert_Input>
  status?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields'
  customerId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  merchantId?: Maybe<Scalars['uuid']>
  placementId?: Maybe<Scalars['uuid']>
  status?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  customerId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  merchantId?: InputMaybe<Order_By>
  placementId?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields'
  customerId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  merchantId?: Maybe<Scalars['uuid']>
  placementId?: Maybe<Scalars['uuid']>
  status?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  customerId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  merchantId?: InputMaybe<Order_By>
  placementId?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Orders>
}

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint
  update_columns?: Array<Orders_Update_Column>
  where?: InputMaybe<Orders_Bool_Exp>
}

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  customerId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  merchantId?: InputMaybe<Order_By>
  placementId?: InputMaybe<Order_By>
  rows_aggregate?: InputMaybe<Order_Rows_Aggregate_Order_By>
  status?: InputMaybe<Order_By>
}

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "orders" */
export enum Orders_Select_Column {
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
export type Orders_Set_Input = {
  customerId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  merchantId?: InputMaybe<Scalars['uuid']>
  placementId?: InputMaybe<Scalars['uuid']>
  status?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "orders" */
export type Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Orders_Stream_Cursor_Value_Input = {
  customerId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  merchantId?: InputMaybe<Scalars['uuid']>
  placementId?: InputMaybe<Scalars['uuid']>
  status?: InputMaybe<Scalars['String']>
}

/** update columns of table "orders" */
export enum Orders_Update_Column {
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

export type Orders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Set_Input>
  where: Orders_Bool_Exp
}

/** columns and relationships of "placements" */
export type Placements = {
  __typename?: 'placements'
  id: Scalars['uuid']
  /** An object relationship */
  merchant: Merchants
  merchantId: Scalars['uuid']
  name: Scalars['String']
}

/** aggregated selection of "placements" */
export type Placements_Aggregate = {
  __typename?: 'placements_aggregate'
  aggregate?: Maybe<Placements_Aggregate_Fields>
  nodes: Array<Placements>
}

export type Placements_Aggregate_Bool_Exp = {
  count?: InputMaybe<Placements_Aggregate_Bool_Exp_Count>
}

export type Placements_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Placements_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<Placements_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "placements" */
export type Placements_Aggregate_Fields = {
  __typename?: 'placements_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Placements_Max_Fields>
  min?: Maybe<Placements_Min_Fields>
}

/** aggregate fields of "placements" */
export type Placements_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Placements_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "placements" */
export type Placements_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Placements_Max_Order_By>
  min?: InputMaybe<Placements_Min_Order_By>
}

/** input type for inserting array relation for remote table "placements" */
export type Placements_Arr_Rel_Insert_Input = {
  data: Array<Placements_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Placements_On_Conflict>
}

/** Boolean expression to filter rows from the table "placements". All fields are combined with a logical 'AND'. */
export type Placements_Bool_Exp = {
  _and?: InputMaybe<Array<Placements_Bool_Exp>>
  _not?: InputMaybe<Placements_Bool_Exp>
  _or?: InputMaybe<Array<Placements_Bool_Exp>>
  id?: InputMaybe<Uuid_Comparison_Exp>
  merchant?: InputMaybe<Merchants_Bool_Exp>
  merchantId?: InputMaybe<Uuid_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "placements" */
export enum Placements_Constraint {
  /** unique or primary key constraint on columns "merchantId", "name" */
  PlacementsNameMerchantIdKey = 'placements_name_merchantId_key',
  /** unique or primary key constraint on columns "id" */
  PlacementsPkey = 'placements_pkey',
}

/** input type for inserting data into table "placements" */
export type Placements_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>
  merchant?: InputMaybe<Merchants_Obj_Rel_Insert_Input>
  merchantId?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Placements_Max_Fields = {
  __typename?: 'placements_max_fields'
  id?: Maybe<Scalars['uuid']>
  merchantId?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "placements" */
export type Placements_Max_Order_By = {
  id?: InputMaybe<Order_By>
  merchantId?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Placements_Min_Fields = {
  __typename?: 'placements_min_fields'
  id?: Maybe<Scalars['uuid']>
  merchantId?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "placements" */
export type Placements_Min_Order_By = {
  id?: InputMaybe<Order_By>
  merchantId?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
}

/** response of any mutation on the table "placements" */
export type Placements_Mutation_Response = {
  __typename?: 'placements_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Placements>
}

/** input type for inserting object relation for remote table "placements" */
export type Placements_Obj_Rel_Insert_Input = {
  data: Placements_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Placements_On_Conflict>
}

/** on_conflict condition type for table "placements" */
export type Placements_On_Conflict = {
  constraint: Placements_Constraint
  update_columns?: Array<Placements_Update_Column>
  where?: InputMaybe<Placements_Bool_Exp>
}

/** Ordering options when selecting data from "placements". */
export type Placements_Order_By = {
  id?: InputMaybe<Order_By>
  merchant?: InputMaybe<Merchants_Order_By>
  merchantId?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
}

/** primary key columns input for table: placements */
export type Placements_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "placements" */
export enum Placements_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MerchantId = 'merchantId',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "placements" */
export type Placements_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>
  merchantId?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "placements" */
export type Placements_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Placements_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Placements_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>
  merchantId?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
}

/** update columns of table "placements" */
export enum Placements_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MerchantId = 'merchantId',
  /** column name */
  Name = 'name',
}

export type Placements_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Placements_Set_Input>
  where: Placements_Bool_Exp
}

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products'
  categoryId: Scalars['uuid']
  description?: Maybe<Scalars['String']>
  id: Scalars['uuid']
  name: Scalars['String']
  price: Scalars['numeric']
}

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate'
  aggregate?: Maybe<Products_Aggregate_Fields>
  nodes: Array<Products>
}

export type Products_Aggregate_Bool_Exp = {
  count?: InputMaybe<Products_Aggregate_Bool_Exp_Count>
}

export type Products_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Products_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<Products_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields'
  avg?: Maybe<Products_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Products_Max_Fields>
  min?: Maybe<Products_Min_Fields>
  stddev?: Maybe<Products_Stddev_Fields>
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>
  sum?: Maybe<Products_Sum_Fields>
  var_pop?: Maybe<Products_Var_Pop_Fields>
  var_samp?: Maybe<Products_Var_Samp_Fields>
  variance?: Maybe<Products_Variance_Fields>
}

/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  avg?: InputMaybe<Products_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Products_Max_Order_By>
  min?: InputMaybe<Products_Min_Order_By>
  stddev?: InputMaybe<Products_Stddev_Order_By>
  stddev_pop?: InputMaybe<Products_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Products_Stddev_Samp_Order_By>
  sum?: InputMaybe<Products_Sum_Order_By>
  var_pop?: InputMaybe<Products_Var_Pop_Order_By>
  var_samp?: InputMaybe<Products_Var_Samp_Order_By>
  variance?: InputMaybe<Products_Variance_Order_By>
}

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>
}

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields'
  price?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  price?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>
  _not?: InputMaybe<Products_Bool_Exp>
  _or?: InputMaybe<Array<Products_Bool_Exp>>
  categoryId?: InputMaybe<Uuid_Comparison_Exp>
  description?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  price?: InputMaybe<Numeric_Comparison_Exp>
}

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductsPkey = 'products_pkey',
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']>
}

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  categoryId?: InputMaybe<Scalars['uuid']>
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  price?: InputMaybe<Scalars['numeric']>
}

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields'
  categoryId?: Maybe<Scalars['uuid']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['numeric']>
}

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  categoryId?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields'
  categoryId?: Maybe<Scalars['uuid']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['numeric']>
}

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  categoryId?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Products>
}

/** on_conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint
  update_columns?: Array<Products_Update_Column>
  where?: InputMaybe<Products_Bool_Exp>
}

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  categoryId?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "products" */
export enum Products_Select_Column {
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
export type Products_Set_Input = {
  categoryId?: InputMaybe<Scalars['uuid']>
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  price?: InputMaybe<Scalars['numeric']>
}

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields'
  price?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
  price?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields'
  price?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields'
  price?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "products" */
export type Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Products_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Products_Stream_Cursor_Value_Input = {
  categoryId?: InputMaybe<Scalars['uuid']>
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  price?: InputMaybe<Scalars['numeric']>
}

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields'
  price?: Maybe<Scalars['numeric']>
}

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  price?: InputMaybe<Order_By>
}

/** update columns of table "products" */
export enum Products_Update_Column {
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

export type Products_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Products_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Products_Set_Input>
  where: Products_Bool_Exp
}

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields'
  price?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields'
  price?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields'
  price?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
  price?: InputMaybe<Order_By>
}

/** columns and relationships of "qr_codes" */
export type Qr_Codes = {
  __typename?: 'qr_codes'
  id: Scalars['uuid']
  /** An object relationship */
  placement: Placements
  placementId: Scalars['uuid']
}

/** aggregated selection of "qr_codes" */
export type Qr_Codes_Aggregate = {
  __typename?: 'qr_codes_aggregate'
  aggregate?: Maybe<Qr_Codes_Aggregate_Fields>
  nodes: Array<Qr_Codes>
}

/** aggregate fields of "qr_codes" */
export type Qr_Codes_Aggregate_Fields = {
  __typename?: 'qr_codes_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Qr_Codes_Max_Fields>
  min?: Maybe<Qr_Codes_Min_Fields>
}

/** aggregate fields of "qr_codes" */
export type Qr_Codes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Qr_Codes_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "qr_codes". All fields are combined with a logical 'AND'. */
export type Qr_Codes_Bool_Exp = {
  _and?: InputMaybe<Array<Qr_Codes_Bool_Exp>>
  _not?: InputMaybe<Qr_Codes_Bool_Exp>
  _or?: InputMaybe<Array<Qr_Codes_Bool_Exp>>
  id?: InputMaybe<Uuid_Comparison_Exp>
  placement?: InputMaybe<Placements_Bool_Exp>
  placementId?: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "qr_codes" */
export enum Qr_Codes_Constraint {
  /** unique or primary key constraint on columns "id" */
  QrCodesPkey = 'qr_codes_pkey',
  /** unique or primary key constraint on columns "placementId" */
  QrCodesPlacementIdKey = 'qr_codes_placementId_key',
}

/** input type for inserting data into table "qr_codes" */
export type Qr_Codes_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>
  placement?: InputMaybe<Placements_Obj_Rel_Insert_Input>
  placementId?: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Qr_Codes_Max_Fields = {
  __typename?: 'qr_codes_max_fields'
  id?: Maybe<Scalars['uuid']>
  placementId?: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export type Qr_Codes_Min_Fields = {
  __typename?: 'qr_codes_min_fields'
  id?: Maybe<Scalars['uuid']>
  placementId?: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "qr_codes" */
export type Qr_Codes_Mutation_Response = {
  __typename?: 'qr_codes_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Qr_Codes>
}

/** on_conflict condition type for table "qr_codes" */
export type Qr_Codes_On_Conflict = {
  constraint: Qr_Codes_Constraint
  update_columns?: Array<Qr_Codes_Update_Column>
  where?: InputMaybe<Qr_Codes_Bool_Exp>
}

/** Ordering options when selecting data from "qr_codes". */
export type Qr_Codes_Order_By = {
  id?: InputMaybe<Order_By>
  placement?: InputMaybe<Placements_Order_By>
  placementId?: InputMaybe<Order_By>
}

/** primary key columns input for table: qr_codes */
export type Qr_Codes_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "qr_codes" */
export enum Qr_Codes_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PlacementId = 'placementId',
}

/** input type for updating data in table "qr_codes" */
export type Qr_Codes_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>
  placementId?: InputMaybe<Scalars['uuid']>
}

/** Streaming cursor of the table "qr_codes" */
export type Qr_Codes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Qr_Codes_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Qr_Codes_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>
  placementId?: InputMaybe<Scalars['uuid']>
}

/** update columns of table "qr_codes" */
export enum Qr_Codes_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PlacementId = 'placementId',
}

export type Qr_Codes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Qr_Codes_Set_Input>
  where: Qr_Codes_Bool_Exp
}

export type Query_Root = {
  __typename?: 'query_root'
  /** An array relationship */
  accounts: Array<Accounts>
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>
  /** An array relationship */
  categories: Array<Categories>
  /** An aggregate relationship */
  categories_aggregate: Categories_Aggregate
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>
  /** fetch data from the table: "customers" */
  customers: Array<Customers>
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>
  /** An array relationship */
  employees: Array<Employees>
  /** An aggregate relationship */
  employees_aggregate: Employees_Aggregate
  /** fetch data from the table: "employees" using primary key columns */
  employees_by_pk?: Maybe<Employees>
  /** fetch data from the table: "menus" */
  menus: Array<Menus>
  /** fetch aggregated fields from the table: "menus" */
  menus_aggregate: Menus_Aggregate
  /** fetch data from the table: "menus" using primary key columns */
  menus_by_pk?: Maybe<Menus>
  /** fetch data from the table: "merchants" */
  merchants: Array<Merchants>
  /** fetch aggregated fields from the table: "merchants" */
  merchants_aggregate: Merchants_Aggregate
  /** fetch data from the table: "merchants" using primary key columns */
  merchants_by_pk?: Maybe<Merchants>
  /** fetch data from the table: "order_rows" */
  order_rows: Array<Order_Rows>
  /** fetch aggregated fields from the table: "order_rows" */
  order_rows_aggregate: Order_Rows_Aggregate
  /** fetch data from the table: "order_rows" using primary key columns */
  order_rows_by_pk?: Maybe<Order_Rows>
  /** An array relationship */
  orders: Array<Orders>
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>
  /** An array relationship */
  placements: Array<Placements>
  /** An aggregate relationship */
  placements_aggregate: Placements_Aggregate
  /** fetch data from the table: "placements" using primary key columns */
  placements_by_pk?: Maybe<Placements>
  /** An array relationship */
  products: Array<Products>
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>
  /** fetch data from the table: "qr_codes" */
  qr_codes: Array<Qr_Codes>
  /** fetch aggregated fields from the table: "qr_codes" */
  qr_codes_aggregate: Qr_Codes_Aggregate
  /** fetch data from the table: "qr_codes" using primary key columns */
  qr_codes_by_pk?: Maybe<Qr_Codes>
  /** An array relationship */
  sessions: Array<Sessions>
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>
  /** execute function "user" which returns "users" */
  user?: Maybe<Users>
  /** execute function "user" and query aggregates on result of table type "users" */
  user_aggregate: Users_Aggregate
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

export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Categories_Order_By>>
  where?: InputMaybe<Categories_Bool_Exp>
}

export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Categories_Order_By>>
  where?: InputMaybe<Categories_Bool_Exp>
}

export type Query_RootCategories_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Customers_Order_By>>
  where?: InputMaybe<Customers_Bool_Exp>
}

export type Query_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Customers_Order_By>>
  where?: InputMaybe<Customers_Bool_Exp>
}

export type Query_RootCustomers_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootEmployeesArgs = {
  distinct_on?: InputMaybe<Array<Employees_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Employees_Order_By>>
  where?: InputMaybe<Employees_Bool_Exp>
}

export type Query_RootEmployees_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Employees_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Employees_Order_By>>
  where?: InputMaybe<Employees_Bool_Exp>
}

export type Query_RootEmployees_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootMenusArgs = {
  distinct_on?: InputMaybe<Array<Menus_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Menus_Order_By>>
  where?: InputMaybe<Menus_Bool_Exp>
}

export type Query_RootMenus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menus_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Menus_Order_By>>
  where?: InputMaybe<Menus_Bool_Exp>
}

export type Query_RootMenus_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootMerchantsArgs = {
  distinct_on?: InputMaybe<Array<Merchants_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Merchants_Order_By>>
  where?: InputMaybe<Merchants_Bool_Exp>
}

export type Query_RootMerchants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Merchants_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Merchants_Order_By>>
  where?: InputMaybe<Merchants_Bool_Exp>
}

export type Query_RootMerchants_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootOrder_RowsArgs = {
  distinct_on?: InputMaybe<Array<Order_Rows_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Order_Rows_Order_By>>
  where?: InputMaybe<Order_Rows_Bool_Exp>
}

export type Query_RootOrder_Rows_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Rows_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Order_Rows_Order_By>>
  where?: InputMaybe<Order_Rows_Bool_Exp>
}

export type Query_RootOrder_Rows_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Orders_Order_By>>
  where?: InputMaybe<Orders_Bool_Exp>
}

export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Orders_Order_By>>
  where?: InputMaybe<Orders_Bool_Exp>
}

export type Query_RootOrders_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootPlacementsArgs = {
  distinct_on?: InputMaybe<Array<Placements_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Placements_Order_By>>
  where?: InputMaybe<Placements_Bool_Exp>
}

export type Query_RootPlacements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Placements_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Placements_Order_By>>
  where?: InputMaybe<Placements_Bool_Exp>
}

export type Query_RootPlacements_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Products_Order_By>>
  where?: InputMaybe<Products_Bool_Exp>
}

export type Query_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Products_Order_By>>
  where?: InputMaybe<Products_Bool_Exp>
}

export type Query_RootProducts_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootQr_CodesArgs = {
  distinct_on?: InputMaybe<Array<Qr_Codes_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Qr_Codes_Order_By>>
  where?: InputMaybe<Qr_Codes_Bool_Exp>
}

export type Query_RootQr_Codes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Qr_Codes_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Qr_Codes_Order_By>>
  where?: InputMaybe<Qr_Codes_Bool_Exp>
}

export type Query_RootQr_Codes_By_PkArgs = {
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

export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
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
  /** An array relationship */
  categories: Array<Categories>
  /** An aggregate relationship */
  categories_aggregate: Categories_Aggregate
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>
  /** fetch data from the table in a streaming manner: "categories" */
  categories_stream: Array<Categories>
  /** fetch data from the table: "customers" */
  customers: Array<Customers>
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>
  /** fetch data from the table in a streaming manner: "customers" */
  customers_stream: Array<Customers>
  /** An array relationship */
  employees: Array<Employees>
  /** An aggregate relationship */
  employees_aggregate: Employees_Aggregate
  /** fetch data from the table: "employees" using primary key columns */
  employees_by_pk?: Maybe<Employees>
  /** fetch data from the table in a streaming manner: "employees" */
  employees_stream: Array<Employees>
  /** fetch data from the table: "menus" */
  menus: Array<Menus>
  /** fetch aggregated fields from the table: "menus" */
  menus_aggregate: Menus_Aggregate
  /** fetch data from the table: "menus" using primary key columns */
  menus_by_pk?: Maybe<Menus>
  /** fetch data from the table in a streaming manner: "menus" */
  menus_stream: Array<Menus>
  /** fetch data from the table: "merchants" */
  merchants: Array<Merchants>
  /** fetch aggregated fields from the table: "merchants" */
  merchants_aggregate: Merchants_Aggregate
  /** fetch data from the table: "merchants" using primary key columns */
  merchants_by_pk?: Maybe<Merchants>
  /** fetch data from the table in a streaming manner: "merchants" */
  merchants_stream: Array<Merchants>
  /** fetch data from the table: "order_rows" */
  order_rows: Array<Order_Rows>
  /** fetch aggregated fields from the table: "order_rows" */
  order_rows_aggregate: Order_Rows_Aggregate
  /** fetch data from the table: "order_rows" using primary key columns */
  order_rows_by_pk?: Maybe<Order_Rows>
  /** fetch data from the table in a streaming manner: "order_rows" */
  order_rows_stream: Array<Order_Rows>
  /** An array relationship */
  orders: Array<Orders>
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>
  /** fetch data from the table in a streaming manner: "orders" */
  orders_stream: Array<Orders>
  /** An array relationship */
  placements: Array<Placements>
  /** An aggregate relationship */
  placements_aggregate: Placements_Aggregate
  /** fetch data from the table: "placements" using primary key columns */
  placements_by_pk?: Maybe<Placements>
  /** fetch data from the table in a streaming manner: "placements" */
  placements_stream: Array<Placements>
  /** An array relationship */
  products: Array<Products>
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>
  /** fetch data from the table in a streaming manner: "products" */
  products_stream: Array<Products>
  /** fetch data from the table: "qr_codes" */
  qr_codes: Array<Qr_Codes>
  /** fetch aggregated fields from the table: "qr_codes" */
  qr_codes_aggregate: Qr_Codes_Aggregate
  /** fetch data from the table: "qr_codes" using primary key columns */
  qr_codes_by_pk?: Maybe<Qr_Codes>
  /** fetch data from the table in a streaming manner: "qr_codes" */
  qr_codes_stream: Array<Qr_Codes>
  /** An array relationship */
  sessions: Array<Sessions>
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>
  /** fetch data from the table in a streaming manner: "sessions" */
  sessions_stream: Array<Sessions>
  /** execute function "user" which returns "users" */
  user?: Maybe<Users>
  /** execute function "user" and query aggregates on result of table type "users" */
  user_aggregate: Users_Aggregate
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

export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Categories_Order_By>>
  where?: InputMaybe<Categories_Bool_Exp>
}

export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Categories_Order_By>>
  where?: InputMaybe<Categories_Bool_Exp>
}

export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>
  where?: InputMaybe<Categories_Bool_Exp>
}

export type Subscription_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Customers_Order_By>>
  where?: InputMaybe<Customers_Bool_Exp>
}

export type Subscription_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Customers_Order_By>>
  where?: InputMaybe<Customers_Bool_Exp>
}

export type Subscription_RootCustomers_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootCustomers_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Customers_Stream_Cursor_Input>>
  where?: InputMaybe<Customers_Bool_Exp>
}

export type Subscription_RootEmployeesArgs = {
  distinct_on?: InputMaybe<Array<Employees_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Employees_Order_By>>
  where?: InputMaybe<Employees_Bool_Exp>
}

export type Subscription_RootEmployees_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Employees_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Employees_Order_By>>
  where?: InputMaybe<Employees_Bool_Exp>
}

export type Subscription_RootEmployees_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootEmployees_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Employees_Stream_Cursor_Input>>
  where?: InputMaybe<Employees_Bool_Exp>
}

export type Subscription_RootMenusArgs = {
  distinct_on?: InputMaybe<Array<Menus_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Menus_Order_By>>
  where?: InputMaybe<Menus_Bool_Exp>
}

export type Subscription_RootMenus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menus_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Menus_Order_By>>
  where?: InputMaybe<Menus_Bool_Exp>
}

export type Subscription_RootMenus_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootMenus_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Menus_Stream_Cursor_Input>>
  where?: InputMaybe<Menus_Bool_Exp>
}

export type Subscription_RootMerchantsArgs = {
  distinct_on?: InputMaybe<Array<Merchants_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Merchants_Order_By>>
  where?: InputMaybe<Merchants_Bool_Exp>
}

export type Subscription_RootMerchants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Merchants_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Merchants_Order_By>>
  where?: InputMaybe<Merchants_Bool_Exp>
}

export type Subscription_RootMerchants_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootMerchants_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Merchants_Stream_Cursor_Input>>
  where?: InputMaybe<Merchants_Bool_Exp>
}

export type Subscription_RootOrder_RowsArgs = {
  distinct_on?: InputMaybe<Array<Order_Rows_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Order_Rows_Order_By>>
  where?: InputMaybe<Order_Rows_Bool_Exp>
}

export type Subscription_RootOrder_Rows_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Rows_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Order_Rows_Order_By>>
  where?: InputMaybe<Order_Rows_Bool_Exp>
}

export type Subscription_RootOrder_Rows_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootOrder_Rows_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Order_Rows_Stream_Cursor_Input>>
  where?: InputMaybe<Order_Rows_Bool_Exp>
}

export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Orders_Order_By>>
  where?: InputMaybe<Orders_Bool_Exp>
}

export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Orders_Order_By>>
  where?: InputMaybe<Orders_Bool_Exp>
}

export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootOrders_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Orders_Stream_Cursor_Input>>
  where?: InputMaybe<Orders_Bool_Exp>
}

export type Subscription_RootPlacementsArgs = {
  distinct_on?: InputMaybe<Array<Placements_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Placements_Order_By>>
  where?: InputMaybe<Placements_Bool_Exp>
}

export type Subscription_RootPlacements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Placements_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Placements_Order_By>>
  where?: InputMaybe<Placements_Bool_Exp>
}

export type Subscription_RootPlacements_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootPlacements_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Placements_Stream_Cursor_Input>>
  where?: InputMaybe<Placements_Bool_Exp>
}

export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Products_Order_By>>
  where?: InputMaybe<Products_Bool_Exp>
}

export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Products_Order_By>>
  where?: InputMaybe<Products_Bool_Exp>
}

export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootProducts_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Products_Stream_Cursor_Input>>
  where?: InputMaybe<Products_Bool_Exp>
}

export type Subscription_RootQr_CodesArgs = {
  distinct_on?: InputMaybe<Array<Qr_Codes_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Qr_Codes_Order_By>>
  where?: InputMaybe<Qr_Codes_Bool_Exp>
}

export type Subscription_RootQr_Codes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Qr_Codes_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Qr_Codes_Order_By>>
  where?: InputMaybe<Qr_Codes_Bool_Exp>
}

export type Subscription_RootQr_Codes_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootQr_Codes_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Qr_Codes_Stream_Cursor_Input>>
  where?: InputMaybe<Qr_Codes_Bool_Exp>
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

export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
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
  merchant?: Maybe<Merchants>
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
  merchant?: InputMaybe<Merchants_Bool_Exp>
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
  merchant?: InputMaybe<Merchants_Obj_Rel_Insert_Input>
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
  merchant?: InputMaybe<Merchants_Order_By>
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
